import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { shellService } from '../components/shell/shell.service';
import { IsshoCardModule } from '../components/issho-card/issho-card.module';
import { IsshoTitleModule } from '../components/issho-title/issho-title.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    IsshoCardModule,
    IsshoTitleModule
  ],
  providers: [shellService]
})
export class HomeModule { }
