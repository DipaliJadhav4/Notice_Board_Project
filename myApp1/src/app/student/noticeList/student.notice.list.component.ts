import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentListNoticeService } from './student.noticelist.service';

@Component({
    selector: 'student-notice-list',
    templateUrl: 'student.notice.list.component.html',
    styleUrls:['./student.notice.list.component.css']
})

export class StudentNoticeListComponent implements OnInit {
    Notices:any[]
    constructor(private router: Router,
        private listNoticeService : StudentListNoticeService) { 
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