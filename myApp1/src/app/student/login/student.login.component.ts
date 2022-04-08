import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import * as toastr from 'toastr'
@Component({
    selector: 'student-login',
    templateUrl: './student.login.component.html',
    styleUrls:['./student.login.component.css']
})

export class StudentLoginComponent implements OnInit {
    email=''
    password=''
   
    constructor(
        private router:Router,
        private StudentService:StudentService
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
            this.StudentService
            .loginstudent(this.email,this.password)
            .subscribe(response=>
                {
                    if(response['status']=='success')
                    {
                        toastr.success('Welcome')
                       this.router.navigate(['/student-dashboard'])
                    }
                    else{
                        toastr.error('Something went wrong... Try again')
                        console.log('error')
                    }
                })

        }
        
    }
    
}