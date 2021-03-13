import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/spring.model';
import { JavaService } from '../services/java.service';

@Component({
  selector: 'java',
  templateUrl: './java.component.html',
  styles: [
  ]
})
export class JavaComponent implements OnInit {

  data:User[];
  constructor(private service:JavaService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((posRes)=>{
      this.data = posRes;
    },(errRes:HttpErrorResponse)=>{
      console.log(errRes);
    })
  }

}
