//in angular, we can represent modal with help of "interfaces"

//for every json object create "interface"

export interface currencyObj{
    symbol : string;
}

export interface Country{
    name : string;
    capital : string;
    population : string;
    nativeName : string;
    currencies : currencyObj[]
};