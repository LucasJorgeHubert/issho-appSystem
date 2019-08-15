import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsshoTitleComponent } from './issho-title.component';



@NgModule({
  declarations: [IsshoTitleComponent],
  imports: [
    CommonModule
  ], exports:[IsshoTitleComponent]
})
export class IsshoTitleModule { }
