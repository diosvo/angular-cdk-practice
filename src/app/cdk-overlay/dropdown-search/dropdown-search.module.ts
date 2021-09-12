import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DropdownSearchComponent } from './dropdown-search.component';

@NgModule({
  declarations: [DropdownSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    A11yModule,
    OverlayModule,

    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
  ],
  exports: [DropdownSearchComponent],
})
export class DropdownSearchModule { }
