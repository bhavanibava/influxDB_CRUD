import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {DataTablesModule} from 'angular-datatables';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  flag : boolean;
  taskData = [];
  constructor(private api : ApiService) { this.flag = false; }
  
  taskList(){
    this.api.getSeriesData().subscribe(res=>{
      console.log('res from taskList : ',res);
      this.taskData = res.message;
      this.flag = true;
    })
  }

  ngOnInit() {
    this.taskList();
  }

  delete(title){
    console.log('title : ',title);
    this.api.deleteSeriesData(title).subscribe(res=>{
      console.log('res from delete method : ',res);
      this.taskList();
    })
  }
}
