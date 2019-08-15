import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommuniqueComponent } from './communique.component';
import { AddCommuniqueModule } from './add-communique/add-communique.module';


@NgModule({
  declarations: [CommuniqueComponent],
  imports: [
    CommonModule,
    AddCommuniqueModule
  ]
})
export class CommuniqueModule { }
