import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Countries } from "./countries.modal";

@Injectable({
    providedIn:"root"
})
export class countriesService{
    url:any;
    constructor(private http:HttpClient){}

    public getCountries():Observable<Countries[]>{
        this.url='https://restcountries.eu/rest/v2/all';  
        return this.http.get<Countries[]>(this.url);
        //return this.http.get<Countries[]>("https://restcountries.eu/rest/v2/all");
    }


};