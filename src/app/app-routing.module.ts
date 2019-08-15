import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralDashboardComponent } from './pages/general-dashboard/general-dashboard.component';
import { HomeComponent } from './pages/general-dashboard/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: GeneralDashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
