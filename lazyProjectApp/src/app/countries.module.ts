import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { countriesComponent } from "./countries.component";
import { countriesService } from "./countries.service";

@NgModule({
    declarations:[countriesComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:countriesComponent}]),
             HttpClientModule],
    providers:[countriesService],
    exports:[countriesComponent]
})
export class countriesModule{}