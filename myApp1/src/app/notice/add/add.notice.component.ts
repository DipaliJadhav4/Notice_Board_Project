import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr'
import { Router } from '@angular/router';
import { AddNoticeService } from './addnotice.service';

@Component({
    selector: 'notice-add',
    templateUrl: 'add.notice.component.html',
    styleUrls:['./add.notice.component.css']
})

export class NoticeAddComponent implements OnInit {
   // constructor() { }

   // ngOnInit() { }


   Notice:any[]
   
   title=''
   description= ''
   photo:any
  
   
   constructor(private router: Router,
       private addNoticeService: AddNoticeService ) { 
           
           this.addNoticeService
     .getAllNotices()
     .subscribe(response => {
       if (response['status'] == 'success') {
           this.Notice = response['data']
          
         } else {
           console.log(response['error'])
         }
       })
   }

       

   ngOnInit() { }

   onSelectFile(event)
    {
        this.photo=event.target.files[0]
    }
   onAdd() 
   {
       this.addNoticeService.addNotice(this.title,this.description,this.photo)
       .subscribe(responce=>
           {
               if(responce['status']=='success')
               {
                   console.log('success')
                   toastr.success('Notice Added Successfully')
                 //this.router.navigate(['/notice-list'])
                 this.router.navigate(['/notice-list'])
               }
               else{
                   console.log("error")
               }
           })      
   }


}