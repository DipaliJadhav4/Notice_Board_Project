import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'admin-dashboard',
    templateUrl: 'admin.dashboard.component.html',
    styleUrls:['./admin.dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {
   
   activePath=''
    constructor(private router : Router) {
        
     }

     switchToComponent(path){
         this.activePath=path
         this.router.navigate([path])

     }

    ngOnInit() { }
}