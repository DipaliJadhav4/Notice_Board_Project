import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as toastr from 'toastr';
import { NoticeService } from './updatenotice.service';

@Component({
    selector: 'update-notice',
    templateUrl: 'updatenotice.component.html',
    styleUrls:['./updatenotice.component.css']

})

export class UpdateNoticeComponent implements OnInit 
{
 title = ''
 description =''
 photo = null
 noticeId=''

    constructor(private noticeService : NoticeService,
    private route:ActivatedRoute,private router : Router)
   { 
        // this.recipe_id = sessionStorage.getItem('recipe_id')
        this.noticeId=route.snapshot.queryParams['id']
        console.log(this.noticeId)
        //this.noticeId = this.route.snapshot.paramMap.get('noticeId')
        if(this.noticeId){
            this.noticeService.getNotice(this.noticeId)
            .subscribe(response=>{
                if(response['status']=='success')
                {
                    console.log("data : "+response['data'])
                    const notice = response['data']
                   
                    this.title = notice.title
                    this.description = notice.description
                    this.photo = notice.photo
                }else{
                    console.log(response['error'])
                }
            })
        }
    }


    onSelectFile(event) {
      this.photo = event.target.files[0]
    }
  
    
    onUpdateNotice()
    {
        this.noticeService.updateNotice(this.noticeId,this.title,this.description, this.photo)
        .subscribe(response=>{
            if(response['status']=='success')
            {
                toastr.success('Notice updated Successfully')
                this.router.navigate(['/notice-list'])
            }else{
                console.log(response['error'])
            }
        })
    }


    onCancel()
    {
        this.router.navigate(['/notice-list'])
      }


   
ngOnInit() { }

}
