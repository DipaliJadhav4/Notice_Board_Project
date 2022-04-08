import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as toastr from 'toastr'
import { StaffService } from '../staff.service';


@Component({
    selector: 'staff-register',
    templateUrl: './staff.register.component.html',
    styleUrls:['./staff.register.component.css']
})

export class StaffRegisterComponent implements OnInit {
    genders=[]
    courses=[]
  

    name=''
    genId:number
    address=''
    post=""  
    courseId:number
    email=''
    mobile_no:number
    password=''
    photo:any
 
    constructor(private router:Router,
        private StaffService:StaffService ) { 
          this.StaffService.getGender()
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


            this.StaffService.getCourse()
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
           else if(this.post.length == 0){
            toastr.error('enter valid post')    
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
              console.log("---------------"+this.name,this.email,this.password,this.courseId,this.post,this.address
                ,this.genId,this.mobile_no,this.photo)
              this.StaffService.registerStaff(this.name,this.email,this.password,this.courseId,this.post,this.address
                ,this.genId,this.mobile_no,this.photo)
             .subscribe(response=>{

                console.log("register component"+response)
               if(response['status']=='success')
               {
                 this.router.navigate(['/staff-login'])
               }
               else
               {
                 this.router.navigate(['/staff-register'])
                // alert('error')
               }
             })
            }
    }        
 }