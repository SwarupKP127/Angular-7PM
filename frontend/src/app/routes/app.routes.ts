import { Routes } from "@angular/router";
import { CartComponent } from "../screens/cart.component";
import { DetailsComponent } from "../screens/details.component";
import { ProductsComponent } from "../screens/products.component";

export const appRoutes:Routes=[
    {path:"products", component:ProductsComponent},
    {path:"details", component:DetailsComponent},
    {path:"", component:CartComponent}
];