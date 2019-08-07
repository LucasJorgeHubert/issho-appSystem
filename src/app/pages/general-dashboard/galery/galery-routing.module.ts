import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { GaleryComponent } from './galery.component';


const routes: Routes = [
  {
    path: 'galery', component: GaleryComponent,
    children: [
      { path: 'add-photo', component: AddPhotoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleryRoutingModule { }
