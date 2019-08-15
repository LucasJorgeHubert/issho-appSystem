import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsComponent } from './events.component';
import { AddEventModule } from './add-event/add-event.module';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    AddEventModule
  ]
})
export class EventsModule { }
