import { WidgetsModule } from './../widgets/widgets.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    WidgetsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
