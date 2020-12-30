import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServerCallerService {

  vuelosUrl = 
    "http://192.168.1.16:3000";

  cochesUrl = [

  ];

  hotelesUrl =[

  ];


  constructor(public httpClient:HttpClient) { }

  getVuelos(): Observable<any>{
    return this.httpClient.get(this.vuelosUrl+"/api/getAll");
  }
}
