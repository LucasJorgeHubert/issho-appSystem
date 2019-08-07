import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { AddStudentComponent } from './add-student/add-student.component';


const routes: Routes = [
  {
    path: 'students', component: StudentsComponent,
    children: [
      { path: 'add-student', component: AddStudentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
