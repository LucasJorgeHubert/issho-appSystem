import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersComponent } from './teachers.component';
import { AddTeacherModule } from './add-teacher/add-teacher.module';


@NgModule({
  declarations: [TeachersComponent],
  imports: [
    CommonModule,
    AddTeacherModule
  ]
})
export class TeachersModule { }
