import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { AddClassComponent } from './add-class/add-class.component';


const routes: Routes = [
  {
    path: 'classes', component: ClassesComponent,
    children: [
      { path: 'add-class', component: AddClassComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
