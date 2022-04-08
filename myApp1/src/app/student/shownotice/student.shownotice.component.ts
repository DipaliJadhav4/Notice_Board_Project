import { Component, OnInit } from '@angular/core';
import { StudentShowNoticeService } from './shownotice.services';
//import { Router, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'student-shownotice',
    templateUrl: 'student.shownotice.component.html',
    styleUrls:['./student.shownotice.component.css']
})

export class StudentShowNoticeComponent implements OnInit {
    notice:any[]
    constructor(private studentShowNoticeService: StudentShowNoticeService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

            const noticeId = activatedRoute.snapshot.queryParams['noticeId']
            if (noticeId){
                this.studentShowNoticeService
                    .getNoticeDetail(noticeId)
                    .subscribe(response => {
                        if(response['status'] == 'success'){
                         console.log(response['data'])
                            this.notice = response['data']
                            
                            console.log(this.notice)
                            
                        }
                    })
            }
         }

    ngOnInit() { }
    onBack(){
        this.router.navigate(['./student-notice-list'])
    }
}