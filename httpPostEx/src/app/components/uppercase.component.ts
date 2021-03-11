import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { UpercaseService } from '../services/upercase.service';


@Component({
  selector: 'uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent {
  res:any;
  my_msg:any;
  constructor(private service:UpercaseService, private spinner:SpinnerVisibilityService){
    
  }

  clickMe(data:any):any{
    this.spinner.show();
    this.service.convertToUpperCase({"message":data}).subscribe((posResp)=>{
           this.res=posResp;
           this.spinner.hide();
    },(errResp:HttpErrorResponse)=>{
      console.log(errResp)
      this.spinner.hide();
    }
    )
  }



  

}
