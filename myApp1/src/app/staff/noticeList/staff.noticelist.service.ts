import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StaffListNoticeService {

    url = 'http://localhost:4500/notice'

  
    constructor(private http: HttpClient) { }

    getAllNotices() 
    {
      return this.http.get(this.url+ '/allNotices')
    }
    
  
}
