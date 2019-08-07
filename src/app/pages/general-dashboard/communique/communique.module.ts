import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommuniqueRoutingModule } from './communique-routing.module';
import { CommuniqueComponent } from './communique.component';


@NgModule({
  declarations: [CommuniqueComponent],
  imports: [
    CommonModule,
    CommuniqueRoutingModule
  ]
})
export class CommuniqueModule { }
