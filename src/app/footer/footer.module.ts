import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [FooterComponent],
})
export class FooterModule { }
