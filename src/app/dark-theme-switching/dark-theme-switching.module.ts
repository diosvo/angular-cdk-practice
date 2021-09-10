import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
    RouterModule.forChild(routes)
  ]
})
export class DarkThemeSwitchingModule { }
