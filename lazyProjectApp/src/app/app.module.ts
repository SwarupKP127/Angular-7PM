import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { lazyRoutes } from './app.routes';
import { mainComponent } from './main.component';
import { pageOneComponent } from './pageone.component';


@NgModule({
  
  declarations: [
    AppComponent,
    mainComponent,
    pageOneComponent
  ],
  imports: [
    BrowserModule,
    lazyRoutes,
    BrowserAnimationsModule
  ],schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [mainComponent],
  
})
export class AppModule { }
