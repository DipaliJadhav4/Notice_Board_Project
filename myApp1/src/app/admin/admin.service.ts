import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminService {

  url = 'http://localhost:4500/admin'

  constructor(private http: HttpClient) { }

  loginadmin(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }
   // console.log('in service '+email,password)
    return this.http.post(this.url + '/login', body)
  }

  //registeradmin(user_name: string,gender:string,phone_no:number ,email_id: string, password: string) {
  //   registeradmin(user_name: string,phone_no:number ,email_id: string, password: string) 
  //   {
    
  //   const body = {
  //       user_name: user_name,
  //       phone_no:phone_no,
  //       email_id: email_id,
  //       password: password
  //   }
  //   console.log(body)
  //   return this.http.post(this.url + '/register', body)
  // }

}