import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleryRoutingModule } from './galery-routing.module';
import { GaleryComponent } from './galery.component';
import { AddPhotoModule } from './add-photo/add-photo.module';


@NgModule({
  declarations: [GaleryComponent],
  imports: [
    CommonModule,
    GaleryRoutingModule,
    AddPhotoModule
  ]
})
export class GaleryModule { }
