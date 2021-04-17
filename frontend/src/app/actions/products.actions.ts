//create actions
//in general, we will create actions by using enum keyword
//enum is keyword, used to define the custom datatype

import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";
import Product from "../modal/Product";

export enum ProductsActions{
    ProductsLoading = '[Products] Loading',
    ProductsLoadingSuccess = '[Products] Loading Success',
    ProductsLoadingFail = '[Products] Loading Fail'
};

export class ProductsLoading implements Action{
     public readonly type = ProductsActions.ProductsLoading;
};

export class ProductsLoadingSuccess implements Action{
     public readonly type = ProductsActions.ProductsLoadingSuccess;
     constructor(public products:Product[]){}
};

export class ProductsLoadingFail implements Action{
    public readonly type = ProductsActions.ProductsLoadingFail;
    constructor(public err:string){}
};

export type ProductsActionTypes = ProductsLoading | ProductsLoadingSuccess | ProductsLoadingFail;

