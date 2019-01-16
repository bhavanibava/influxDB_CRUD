import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from '../task-list/task-list.component';
import { AddTaskComponent } from '../add-task/add-task.component';

const routes: Routes = [{
  path : 'list',
  component : TaskListComponent
},
{
  path : 'add',
  component : AddTaskComponent
},
{
  path : '',
  redirectTo : '/home',
  pathMatch : 'full'
},
{
  path : '**',
  redirectTo : '/home',
  pathMatch : 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingRoutingModule { }
