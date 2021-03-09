//import injectable
//Injectable used to create service
import { Injectable } from '@angular/core'


//import HttpClient
//HttpClient connect to server (http calls)
import { HttpClient } from "@angular/common/http";

//import Observable
//Observable, used to make asynchronous call
import { Observable } from "rxjs";
import { Country } from '../modal/countries.modal';

@Injectable({
    providedIn : "root"
})

export class countriesService{
    constructor(private http : HttpClient){}
    public getCountries():Observable<Country[]> {
           return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
    }
}

