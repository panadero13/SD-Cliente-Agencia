import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServerCallerService {

  usersUrl = 
    "http://192.168.1.16:3001";

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

  login(username:String, password:String):Observable<any>{
    var user = {
      username: username,
      password: password
    }
    return this.httpClient.post(this.usersUrl+"/api/findRegisteredUser/", user);
  }

  home(){
    return this.httpClient.get("http://localhost:4200/vuelos");
  }
}
