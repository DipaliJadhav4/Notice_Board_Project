// import { Component, OnInit } from '@angular/core';
// import{ AdminService} from '../admin.service'
// import { RouterModule, Router } from '@angular/router';
// @Component({
//     selector: 'admin-register',
//     templateUrl: './admin.register.component.html',
//     styleUrls:['./admin.register.component.css']
// })

// export class AdminRegisterComponent implements OnInit {
//     user_name=''
//     gender=''
//     phone_no:number
//     email_id=''
//     password=''
    

//     constructor(
//         private router:Router,
//         private AdminService:AdminService) { }

//     ngOnInit() { }
     
//     onregister()
//     {
//         // console.log(this.user_name+' '+this.phone_no+' '+this.gender+' '+this.email_id+' '+this.password)
//         // this.AdminService
//         // .registeradmin(this.user_name,this.gender,this.phone_no,this.email_id,this.password)
//         this.AdminService
//         .registeradmin(this.user_name,this.phone_no,this.email_id,this.password)
//         .subscribe(response=>{
//             if(response['status']=="success")
//             {
//                 console.log('success')
//                this.router.navigate(['/admin-login'])
//             }
//             else
//             {
//                 console.log('error')
//             }
//         })
//     }

//     oncancel()
//     {
//         this.router.navigate[('/admin-login')]
//     }
// }