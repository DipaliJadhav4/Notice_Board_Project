import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as toastr from 'toastr'
import { StudentService } from '../student.service';


@Component({
    selector: 'student-register',
    templateUrl: './student.register.component.html',
    styleUrls:['./student.register.component.css']
})

export class StudentRegisterComponent implements OnInit {
    //constructor() { }

    //ngOnInit() { }

    genders=[]
    courses=[]
  

    name=''
    genId:number
    address=''
   // post=""  
    courseId:number
    email=''
    mobile_no:number
    password=''
    photo:any
 
    constructor(private router:Router,
        private StudentService : StudentService ) { 
          this.StudentService.getGender()
          .subscribe(response=>
            {
              if(response['status']=="success")
              {
                this.genders=response['data']
              }
              else{
                console.log(response['error'])
              }
            })


            this.StudentService.getCourse()
            .subscribe(response=>
              {
                if(response['status']=="success")
                {
                  this.courses=response['data']
                }
                else{
                  console.log(response['error'])
                }
              })



        }

    ngOnInit() { }
    onSelectFile(event)
    {
        this.photo=event.target.files[0]
    }
    onRegister() 
    {
     // alert('inside onRegister')
            if(this.name.length == 0) {
              toastr.error('enter valid username')
            }
            else if(this.address.length == 0){
              toastr.error('enter valid address')    
           }
           
         else if(this.courseId== 0){
          toastr.error('enter valid course')    
       }
       else if(this.mobile_no == 0){
        toastr.error('enter valid phone_no')    
     }
     else if(this.genId == 0){
      toastr.error('enter Gender')    
   }
     else if (this.email.length == 0) {
      toastr.error('enter valid email_id')
    }
          else if (this.password.length == 0) {
           toastr.error('enter valid password')
            }
            else
            {
              console.log("---------------"+this.name,this.email,this.password,this.courseId,this.address
                ,this.genId,this.mobile_no,this.photo)
              this.StudentService.registerStudent(this.name,this.email,this.password,this.courseId,this.address
                ,this.genId,this.mobile_no,this.photo)
             .subscribe(response=>{

                console.log("register component"+response)
               if(response['status']=='success')
               {
                 this.router.navigate(['/student-login'])
               }
               else
               {
                 this.router.navigate(['/student-register'])
                // alert('error')
               }
             })
            }
    }




}