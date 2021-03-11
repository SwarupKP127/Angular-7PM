import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Uppercase } from '../model/uppercase.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpercaseService {

  constructor(private http:HttpClient) { }

  //uppercase service receives data from component and send to server
  public convertToUpperCase(data:Uppercase):Observable<Uppercase>{
    return this.http.post<Uppercase>('http://test-routes.herokuapp.com/test/uppercase',data);
  };

}
