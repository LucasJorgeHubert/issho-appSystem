import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsComponent } from './parents.component';
import { AddParentModule } from './add-parent/add-parent.module';


@NgModule({
  declarations: [ParentsComponent],
  imports: [
    CommonModule,
    AddParentModule
  ]
})
export class ParentsModule { }
