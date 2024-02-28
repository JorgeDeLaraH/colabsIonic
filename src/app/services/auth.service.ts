import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _URL_AUTH } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }
  authUser(email:any,password:any):Observable<any>{
    return this.http.get(_URL_AUTH+`?email=${email}&password=${password}`)
  }

}
