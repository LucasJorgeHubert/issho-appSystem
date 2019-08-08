import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modules
import { GeneralDashboardComponent } from './general-dashboard.component';
import { AttendanceListModule } from './attendance-list/attendance-list.module';
import { ChatModule } from './chat/chat.module';
import { CommuniqueModule } from './communique/communique.module';
import { EventsModule } from './events/events.module';
import { GaleryModule } from './galery/galery.module';
import { HealthModule } from './health/health.module';
import { HomeModule } from './home/home.module';
import { ParentsModule } from './parents/parents.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { AsideMenuModule } from './components/shell/aside-menu/aside-menu.module';
import { HeaderModule } from './components/shell/header/header.module';
import { RouterModule } from '@angular/router';
//


@NgModule({
  declarations: [GeneralDashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    // Modules
    AttendanceListModule,
    ChatModule,
    CommuniqueModule,
    EventsModule,
    GaleryModule,
    HealthModule,
    HomeModule,
    ParentsModule,
    StudentsModule,
    TeachersModule,
    // Shell Modules
    AsideMenuModule,
    HeaderModule
  ],
  exports: [GeneralDashboardComponent]
})
export class GeneralDashboardModule { }
