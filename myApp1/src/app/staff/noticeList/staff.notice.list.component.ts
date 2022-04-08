import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffListNoticeService } from './staff.noticelist.service';
@Component({
    selector: 'staff-notice-list',
    templateUrl: 'staff.notice.list.component.html',
    styleUrls:['./staff.notice.list.component.css']
})

export class StaffNoticeListComponent implements OnInit {
    Notices:any[]
    constructor(private router: Router,
        private listNoticeService : StaffListNoticeService) { 
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
    onShowNotice(noticeId: string){
        this.router.navigate(['./student-shownotice'],{queryParams: {noticeId:noticeId}} )

    }
    
}