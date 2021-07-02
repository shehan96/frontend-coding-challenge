import { PagesModule } from './../../pages/pages.module';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PagesModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class DefaultModule { }
