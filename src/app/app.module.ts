import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideMenuModule } from './pages/general-dashboard/components/shell/aside-menu/aside-menu.module';
import { HeaderModule } from './pages/general-dashboard/components/shell/header/header.module';
import { AttendanceListComponent } from './pages/general-dashboard/attendance-list/attendance-list.component';
import { GeneralDashboardComponent } from './pages/general-dashboard/general-dashboard.component';
import { GeneralDashboardModule } from './pages/general-dashboard/general-dashboard.module';
import { TeacherDashboardModule } from './pages/teacher-dashboard/teacher-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralDashboardModule,
    TeacherDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
