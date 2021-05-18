import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class authGuards{
   canActivate():boolean{
      return confirm("Do you want to enter into page one??");
   };

   canDeactivate():boolean{
     return confirm("Do you want to leave pagetwo ??");
   };

   canActivateChild():boolean{
      return confirm("Do you want to enter into childthree??");
   };
};