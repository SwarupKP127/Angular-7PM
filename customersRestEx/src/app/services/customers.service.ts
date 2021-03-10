//import injectable
//Injectable used to create service
import { Injectable } from "@angular/core";

//import HttpClient
//HttpClient used to make rest api calls
import { HttpClient } from "@angular/common/http";

//import Observable
//Observable used to make asynchronous call
import { Observable } from "rxjs";
import { Customers } from "../model/customers.model";
import { SpinnerVisibilityService } from "ng-http-loader";

@Injectable({
    providedIn : "root"
})

export class customersService{
    //dependency injection
    constructor(private http:HttpClient){}

    //create the function
    public getCustomers():Observable<Customers>{
        return this.http.get<Customers>('https://www.w3schools.com/angular/customers.php');
    };
};