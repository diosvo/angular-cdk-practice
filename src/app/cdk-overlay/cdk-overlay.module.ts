import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownSearchComponent } from './dropdown-search/dropdown-search.component';
import { DropdownSearchModule } from './dropdown-search/dropdown-search.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DropdownSearchModule,
    RouterModule.forChild([
      {
        path: '',
        component: DropdownSearchComponent
      }
    ])
  ]
})
export class CdkOverlayModule { }
