import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { DarkThemeSwitchingComponent } from './dark-theme-switching.component';
const routes: Routes = [
  {
    path: '',
    component: DarkThemeSwitchingComponent
  }
]

@NgModule({
  declarations: [
    DarkThemeSwitchingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatInputModule,
    MatFormFieldModule
  ]
})
export class DarkThemeSwitchingModule { }
