import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideMenuRoutingModule } from './aside-menu.routing';
import { AsideMenuComponent } from './aside-menu.component';


@NgModule({
  declarations: [AsideMenuComponent],
  imports: [
    CommonModule,
    AsideMenuRoutingModule
  ]
})
export class AsideMenuModule { }
