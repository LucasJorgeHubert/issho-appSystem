import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';


const routes: Routes = [
  {
    path: 'teacher', component: TeachersComponent,
    children: [
      { path: 'add-teacher', component: AddTeacherComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
