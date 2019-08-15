import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { shellService } from '../shell.service';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports: [HeaderComponent],
  providers: [shellService]
})
export class HeaderModule { }
