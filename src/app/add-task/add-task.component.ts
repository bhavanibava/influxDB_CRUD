import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private api: ApiService) { }
  data = {
    title : '',
    description : ''
  };
  editorConfig = {
    editable: true,
    minHeight: '5rem',
    "toolbar": [
      ["bold", "italic", "underline"],
      ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
      ["link", "unlink", "image", "video"]
  ]
  };

  submit(data){
    console.log('req data is : ',data);
    let task = {
      "measurement": "todoTask",
      "tags": {
        "title" : data.title,
        "description" : data.description
      },
      "fields": {
        "id":"1"
      }
    }
    this.api.addTask(task).subscribe(res=>{
      console.log('res : ',res);
    })
  }

  ngOnInit() {
  }

}
