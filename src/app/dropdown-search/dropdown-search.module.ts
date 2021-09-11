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

    MatIconModule,
    MatInputModule,
    MatFormFieldModule,

  ]
})
export class DropdownSearchModule { }
