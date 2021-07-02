import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoItemBoxComponent } from './repo-item-box/repo-item-box.component';

@NgModule({
  declarations: [
    RepoItemBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RepoItemBoxComponent
  ]
})
export class WidgetsModule { }
