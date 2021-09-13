import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { ToolbarModule } from './toolbar/toolbar.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./cdk-overlay/cdk-overlay.module').then(m => m.CdkOverlayModule)
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(routes),

    FooterModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
