import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideMenuRoutingModule } from './aside-menu.routing';
import { AsideMenuComponent } from './aside-menu.component';
import { MenuItemModule } from '../../menu-item/menu-item.module';


@NgModule({
  declarations: [AsideMenuComponent],
  imports: [
    CommonModule,
    AsideMenuRoutingModule,
    MenuItemModule
  ],
  exports: [AsideMenuComponent]
})
export class AsideMenuModule { }
