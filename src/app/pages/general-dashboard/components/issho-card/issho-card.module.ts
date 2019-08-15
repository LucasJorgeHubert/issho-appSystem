import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsshoCardComponent } from './issho-card.component';



@NgModule({
  declarations: [IsshoCardComponent],
  imports: [
    CommonModule
  ],
  exports: [IsshoCardComponent]
})
export class IsshoCardModule { }
