import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import * as toastr from 'toastr'
@Component({
    selector: 'admin-login',
    templateUrl: './admin.login.component.html',
    styleUrls:['./admin.login.component.css']
})

export class AdminLoginComponent implements OnInit {
    email=''
    password=''
   
    constructor(
        private router:Router,
        private AdminService:AdminService
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
            this.AdminService
            .loginadmin(this.email,this.password)
            .subscribe(response=>
                {
                    if(response['status']=='success')
                    {
                        toastr.success('Welcome')
                       this.router.navigate(['/admin-dashboard'])
                    }
                    else{
                        toastr.error('Something went wrong... Try again')
                        console.log('error')
                    }
                })

        }
        
    }
    
}