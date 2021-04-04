import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Product from "../modal/Product";

@Injectable({
    providedIn:"root"
})

export class ProductsService{
    constructor(private http:HttpClient){}

    public getProducts():Observable<Product[]>{
        return this.http.get<Product[]>('http://localhost:9193/api/products');
    };
};