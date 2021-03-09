import { Component, ɵpatchComponentDefWithScope } from "@angular/core";
import { employeeService } from "../service/employee.service";
@Component({
    selector : "produts",
    templateUrl : "./comp.two.html"
})

export class compTwo{
    msg_two:string;
    constructor(private obj:employeeService){

    }

    ngOnInit(){
        this.msg_two = this.obj.var_two;
    }
};