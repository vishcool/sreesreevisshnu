import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient:HttpClient) { }

  fetchAll(){
    // let req = new HttpRequest('GET',environment.fetchAll)
    // return this.httpClient.request(req)
  }


  fetchUser(id:number){
    // let req = new HttpRequest('GET',environment.fetchAll+"/"+id)
    // return this.httpClient.request(req)
  }

  saveUser(){
    // var user = {
    //   id:1001,
    //   name:"Vishnu",
    //   Image:"image"
    // }
    // let req = new HttpRequest('POST',environment.saveUser,user)
    // return this.httpClient.request(req)
  }

  
}
