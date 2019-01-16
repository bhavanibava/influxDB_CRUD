import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {NgxEditorModule} from 'ngx-editor';
import { DataTablesModule } from 'angular-datatables';
import {FlexLayoutModule} from '@angular/flex-layout';

import { TaskRoutingRoutingModule } from './task-routing-routing.module';
import { TaskListComponent } from '../task-list/task-list.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingRoutingModule,
    MaterialModule,
    NgxEditorModule,
    DataTablesModule,
    FlexLayoutModule
  ],
  declarations: [
    TaskListComponent,
    AddTaskComponent
  ]
})
export class TaskRoutingModule { }