import { HttpErrorResponse } from "@angular/common/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";
import { SpinnerVisibilityService } from "ng-http-loader";
//import { SpinnerVisibilityService } from "ng-http-loader";
import { Customers } from "../model/customers.model";
import { customersService } from "../services/customers.service";
@Component({
    selector:"customers",
    templateUrl:"./customers.component.html"
})

export class customersComponent{
    //model
    data:Customers;

    constructor(private service:customersService,private spinner:SpinnerVisibilityService){

    }

    ngOnInit(){
        //show the spinner here
        this.spinner.show();
        this.service.getCustomers().subscribe((posResp)=>{
            this.data=posResp;
            //hide the spinner here
            this.spinner.hide();
        },(errResp:HttpErrorResponse)=>{
            console.log(errResp);
            //hide the spinner here
            this.spinner.hide();
        })
    }
}