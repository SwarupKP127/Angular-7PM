import { Component} from '@angular/core';
import { employeeService } from '../service/employee.service';
@Component({
    selector : "customers",
    templateUrl : "./comp.three.html"
})

export class compThree{
    msg_three : string;
    constructor( private obj : employeeService){
    }

    ngOnInit(){
        this.msg_three = this.obj.var_three;
    }
};