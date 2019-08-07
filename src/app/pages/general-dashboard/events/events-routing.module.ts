import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { AddEventComponent } from './add-event/add-event.component';


const routes: Routes = [
  {
    path: 'events', component: EventsComponent,
    children: [
      { path: 'add-event', component: AddEventComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
