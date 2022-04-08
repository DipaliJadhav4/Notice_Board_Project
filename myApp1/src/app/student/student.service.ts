import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudentService {

  url = 'http://localhost:4500/student'

  constructor(private http: HttpClient) { }

  loginstudent(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }
   // console.log('in service '+email,password)
    return this.http.post(this.url + '/login', body)
  }




  registerStudent(name: string,email: string,password: string,courseId:Number,address:string,genId:Number,
    mobile_no:Number,photo:any) 
    {
      
      const body = new FormData()
      
  
      //body.append('staffId',""+staffId)
      body.append('name',name)
     // body.append('Date_of_birth',""+Date_of_birth)
      body.append('email',email)
      body.append('password',password)
      body.append('courseId',""+courseId)
     // body.append('post',post)
      body.append('address',address)
      body.append('genId',""+genId)
      body.append('mobile_no',""+mobile_no)
      body.append('photo',photo)
  
      console.log("from service register"+body)
  
      //console.log('++++++++++++'+this.http.post(this.url+'/register',body))
      return this.http.post(this.url+'/register',body)
    }
  
    getGender()
    {
      return this.http.get(this.url+"/gender")
    }
  
    getCourse()
    {
      return this.http.get(this.url+"/course")
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