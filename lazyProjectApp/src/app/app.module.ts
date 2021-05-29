import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { lazyRoutes } from './app.routes';
import { mainComponent } from './main.component';
import { pageOneComponent } from './pageone.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  
  declarations: [
    AppComponent,
    mainComponent,
    pageOneComponent
  ],
  imports: [
    BrowserModule,
    lazyRoutes,
    NgxSpinnerModule
  ],schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [mainComponent],
  
})
export class AppModule { }
