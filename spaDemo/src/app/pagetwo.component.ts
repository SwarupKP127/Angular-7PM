import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pagetwo',
  templateUrl: './pagetwo.component.html',
  styles: [
  ]
})
export class PagetwoComponent implements OnInit {

  var_two:string;
  constructor() {
    this.var_two="Page two !!!";
   }
   

  ngOnInit(): void {
  }

}
