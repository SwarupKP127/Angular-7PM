import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { Countries } from "./countries.modal";
import { countriesService } from "./countries.service";

@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
export class countriesComponent{
    result:Countries[];
    constructor(private service:countriesService){}
    ngOnInit(){
        this.service.getCountries().subscribe((posRes:Countries[])=>{
            this.result = posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log( errRes );
        })
    };
};