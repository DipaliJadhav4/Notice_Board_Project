import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudentShowNoticeService {

    url = 'http://localhost:4500/notice'

  constructor(private http: HttpClient) { }
//   getNotice(noticeId: string) 
//   {
//     return this.http.get(this.url+ '/'+ noticeId)
//   }
  
  
  getNoticeDetail(noticeId: number) {
    console.log("++++++++++++++"+this.url + '/details/' + noticeId)
    return this.http.get(this.url + '/details/' + noticeId)
  }

  
}