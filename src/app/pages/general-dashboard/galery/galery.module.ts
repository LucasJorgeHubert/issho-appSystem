import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleryComponent } from './galery.component';
import { AddPhotoModule } from './add-photo/add-photo.module';


@NgModule({
  declarations: [GaleryComponent],
  imports: [
    CommonModule,
    AddPhotoModule
  ]
})
export class GaleryModule { }
