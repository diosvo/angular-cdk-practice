import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { DropdownSearchComponent } from './dropdown-search.component';


@NgModule({
  declarations: [
    DropdownSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DropdownSearchComponent
      }
    ]),

    A11yModule,
    OverlayModule,

    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class DropdownSearchModule { }
