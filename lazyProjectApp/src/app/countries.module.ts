import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";
import { countriesComponent } from "./countries.component";
import { countriesService } from "./countries.service";


@NgModule({
    declarations:[countriesComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:countriesComponent}]),
             HttpClientModule,
             NgxSpinnerModule],
             schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers:[countriesService],
    exports:[countriesComponent]
})
export class countriesModule{}