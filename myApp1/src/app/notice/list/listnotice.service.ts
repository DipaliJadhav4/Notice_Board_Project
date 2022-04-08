import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListNoticeService {

    url = 'http://localhost:4500/notice'

  
    constructor(private http: HttpClient) { }

    getAllNotices() 
    {
      return this.http.get(this.url+ '/allNotices')
    }
    
    addNotice(title: string, description: string,photo:any)
    {
  
      const body = new FormData()
      // body.append(PGID,PGID)
      body.append('title',title )
      body.append('description', description)
      body.append('photo', photo)
      
  
      return this.http.post(this.url + '/addNotice', body)
  }
   

  deleteNotice(noticeId : string ){

   
      return this.http.delete(this.url + '/' + noticeId)
    
  
  }

}
