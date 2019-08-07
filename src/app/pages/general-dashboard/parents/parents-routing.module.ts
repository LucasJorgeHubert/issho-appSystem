import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddParentsComponent } from './add-parent/add-parent.component';
import { ParentsComponent } from './parents.component';


const routes: Routes = [
  {
    path: 'parents', component: ParentsComponent,
    children: [
      { path: 'add-parent', component: AddParentsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
