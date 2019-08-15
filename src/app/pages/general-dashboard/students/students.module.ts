import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsComponent } from './students.component';
import { AddStudentModule } from './add-student/add-student.module';


@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    AddStudentModule
  ]
})
export class StudentsModule { }
