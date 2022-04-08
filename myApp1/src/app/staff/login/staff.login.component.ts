import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../staff.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import * as toastr from 'toastr'
@Component({
    selector: 'staff-login',
    templateUrl: './staff.login.component.html',
    styleUrls:['./staff.login.component.css']
})

export class StaffLoginComponent implements OnInit {
    email=''
    password=''
   
    constructor(
        private router:Router,
        private StaffService:StaffService
    ) { }

    ngOnInit() { }
    onlogin()
    {
        //console.log(this.email_id+''+this.password)
        if(this.email.length==0)
        {
            toastr.error('Enter valid Email')
        }
        else if(this.password.length==0)
        {
            toastr.error('Enter valid Password')
        }
        else{
            this.StaffService
            .loginstaff(this.email,this.password)
            .subscribe(response=>
                {
                    if(response['status']=='success')
                    {
                        toastr.success('Welcome')
                       this.router.navigate(['/staff-notice-list'])
                    }
                    else{
                        toastr.error('Something went wrong... Try again')
                        console.log('error')
                    }
                })

        }
        
    }
    
}