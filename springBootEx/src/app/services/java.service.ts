import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/spring.model';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(private http:HttpClient) { }
  public getUsers():Observable<User[]>{
           return this.http.get<User[]>('http://localhost:9092/api/demo');
  }
}
