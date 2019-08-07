import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommuniqueComponent } from './communique.component';
import { AddCommuniqueComponent } from './add-communique/add-communique.component';


const routes: Routes = [
  {
    path: 'communique', component: CommuniqueComponent,
    children: [
      { path: 'add-communique', component: AddCommuniqueComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommuniqueRoutingModule { }
