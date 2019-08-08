import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralDashboardComponent } from './pages/general-dashboard/general-dashboard.component';


const routes: Routes = [
  {path: 'dash', component: GeneralDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
