import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './screens/products.component';
import { DetailsComponent } from './screens/details.component';
import { CartComponent } from './screens/cart.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/app.routes';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './reducer/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './effects/products.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({"products":productsReducer}),
    EffectsModule.forRoot([ProductsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
