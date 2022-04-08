import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoticeService {

 
    url = 'http://localhost:4500/notice'

  constructor(private http: HttpClient) { }

  getNotice(noticeId: string) 
  {
    return this.http.get(this.url+ '/'+ noticeId)
  }

  updateNotice(noticeId: string,title: string,description: string,photo:File)
   {

   
      const body = new FormData()
      
      
      body.append('title', title)
      body.append('description', description)
      body.append('photo', photo)
  
        return this.http.put(this.url + '/withPhoto/' + noticeId,body)
    }


    // const body = {
    //   title: title,
    //   description: description
    // }

    // return this.http.put(this.url + '/' + noticeId, body)
  }

