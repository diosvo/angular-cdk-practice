import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar.component';
@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSlideToggleModule
  ],
  exports: [ToolbarComponent],
})
export class ToolbarModule { }
