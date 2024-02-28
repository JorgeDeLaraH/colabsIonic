import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _URL_COLAB, _URL_COLABS, _URL_USER } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor(public http:HttpClient) { }
  getColaboradores():Observable<any>{
    return this.http.get(_URL_COLABS)
  }
  getColaborador(id:string):Observable<any>{
    return this.http.get(_URL_USER+id)
  }
  deleteColaborador(data:Object):Observable<Object>{
    return this.http.delete(_URL_COLAB,{body:data})
  }
  putColaborador(data:Object):Observable<Object>{
    return this.http.put(_URL_COLAB,data)
  }
  postColaborador(data:Object):Observable<Object>{
    return this.http.post(_URL_COLAB,data)
  }
}
