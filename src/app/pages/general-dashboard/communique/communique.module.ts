import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommuniqueRoutingModule } from './communique-routing.module';
import { CommuniqueComponent } from './communique.component';
import { AddCommuniqueModule } from './add-communique/add-communique.module';


@NgModule({
  declarations: [CommuniqueComponent],
  imports: [
    CommonModule,
    CommuniqueRoutingModule,
    AddCommuniqueModule
  ]
})
export class CommuniqueModule { }
