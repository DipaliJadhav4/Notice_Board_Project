import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListNoticeService } from './listnotice.service';
import * as toastr from 'toastr';
@Component({
    selector: 'notice-list',
    templateUrl: 'list.notice.component.html',
    styleUrls:['./list.notice.component.css']
})

export class NoticeListComponent implements OnInit {
    //constructor() { }

    //ngOnInit() { }

    Notices:any[]
    constructor(private router: Router,
        private listNoticeService : ListNoticeService) { 
            this.listNoticeService
            .getAllNotices()
            .subscribe(response =>{
                      if (response['status']=='success'){
                        this.Notices = response['data']
                      }else {
                        console.log(response['error'])
                      }
                    })
            
        }

    ngOnInit() { }
    addNotice(){
            this.router.navigate(['./notice-add'])
          }
    //  onUpdate(){
    //         this.router.navigate(['./update-notice'])
    //       }


 onUpdate(noticeId: string){
   
   this.router.navigate(['/update-notice'],{queryParams: {id:noticeId}} )
 }

//  onDelete(noticeId: string){
   
//   this.router.navigate(['/update-notice'],{queryParams: {id:noticeId}} )
// }
loadNotices() {
  this.listNoticeService
    .getAllNotices()
    .subscribe(response => {
      if (response['status'] == 'success') {
        this.Notices = response['data']
      } else {
        alert('error')
      }
    })
}

onDelete(noticeId: string) {
  this.listNoticeService
    .deleteNotice(noticeId)
    .subscribe(response => {
      if (response['status'] == 'success') {
        toastr.success('Notice updated Successfully')
       this.loadNotices()
      } else {
        console.log(response['error'])
      }
    })
}
    
}