import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { Country } from "../modal/countries.modal";
import { countriesService } from "../services/countries.service";

@Component({
    selector : "countries",
    templateUrl : "./countries.component.html"
})

export class countriesComponent{
    data:Country[];
    constructor(private service:countriesService){

    }
    //HttpErrorResponse handle error without crashing the application
    //ngOnInit is the first lifecycle hook
    //getCountries() contains asynchronous logic
    ngOnInit(){
        this.service.getCountries().subscribe((posResp)=>{
            this.data = posResp;
        }, (errResp:HttpErrorResponse)=>{
            console.log(errResp)
        });
    }
};

