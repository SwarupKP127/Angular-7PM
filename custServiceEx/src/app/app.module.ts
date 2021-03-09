import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { compOne } from './components/comp.one';
import { compThree } from './components/comp.three';
import { compTwo } from './components/comp.two';

@NgModule({
  declarations: [
    AppComponent,
    compOne,
    compTwo,
    compThree
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [compOne]
})
export class AppModule { }
