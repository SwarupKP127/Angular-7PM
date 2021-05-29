import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";

import { Countries } from "./countries.modal";
import { countriesService } from "./countries.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector:"countries",
    templateUrl:'./countries.component.html'
})
export class countriesComponent{
    result:Countries[];
    constructor(private service:countriesService,
        private SpinnerService: NgxSpinnerService){}
    ngOnInit(){
        this.SpinnerService.show();
        this.service.getCountries().subscribe((posRes:Countries[])=>{
            this.result = posRes;
            this.SpinnerService.hide();
        },(errRes:HttpErrorResponse)=>{
            console.log( errRes );
            this.SpinnerService.hide();
        })
    };
};