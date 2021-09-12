import { Overlay } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar.component';
@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [ToolbarComponent],
  providers: [Overlay]
})
export class ToolbarModule { }
