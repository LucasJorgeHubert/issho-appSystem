import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthComponent } from './health.component';


const routes: Routes = [
  {
    path: 'healt', component: HealthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthRoutingModule { }
