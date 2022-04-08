import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { AdminService } from './admin/admin.service';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router'
import { AdminLoginComponent } from './admin/login/admin.login.component';
import { AppHomeComponent } from './home/home.component';
import { ErrorPageComponent } from './errorpage/errorpage.component';
import { AppContactUsComponent } from './contactUs/contactUs.component';
import { StaffLoginComponent } from './staff/login/staff.login.component';
import { StaffService } from './staff/staff.service';
import { StudentLoginComponent } from './student/login/student.login.component';
import { StudentService } from './student/student.service';
import { StaffRegisterComponent } from './staff/register/staff.register.component';
import { StudentRegisterComponent } from './student/register/student.register.component';
import { NoticeListComponent } from './notice/list/list.notice.component';
import { NoticeAddComponent } from './notice/add/add.notice.component';
import { StaffNoticeListComponent } from './staff/noticeList/staff.notice.list.component';
import { StudentNoticeListComponent } from './student/noticeList/student.notice.list.component';
import { AddNoticeService } from './notice/add/addnotice.service';
import { ListNoticeService } from './notice/list/listnotice.service';
import { AdminDashboardComponent } from './admin/dashboard/admin.dashboard.component';
import { AdminProfileComponent } from './admin/profile/adminprofile.component';
import { UpdateNoticeComponent } from './notice/update/updatenotice.component';
import { NoticeService } from './notice/update/updatenotice.service';
import { StudentDashboardComponent } from './student/dashboard/student.dashboard.component';
import { StudentListNoticeService } from './student/noticeList/student.noticelist.service';
import { StudentShowNoticeComponent } from './student/shownotice/student.shownotice.component';
import { StudentShowNoticeService } from './student/shownotice/shownotice.services';
import { from } from 'rxjs';
import { StaffListNoticeService } from './staff/noticeList/staff.noticelist.service';

const routes:Route[]=[
   { path: '', component: AppHomeComponent },
   
   { path: 'app-contactUs', component: AppContactUsComponent },
   { path: 'app-home', component: AppHomeComponent },
   { path: 'admin-login', component: AdminLoginComponent },
  
   { path: 'update-notice', component: UpdateNoticeComponent },
   { path: 'staff-login', component: StaffLoginComponent },
   { path: 'student-dashboard', component: StudentDashboardComponent },
  
   { path: 'student-login', component: StudentLoginComponent },
   { path: 'staff-register', component: StaffRegisterComponent },
   { path: 'student-register', component: StudentRegisterComponent },
  
   { path: 'student-notice-list', component: StudentNoticeListComponent },
   { path: 'staff-notice-list', component: StaffNoticeListComponent },
   { path: 'notice-add', component: NoticeAddComponent },

  { path: 'notice-list', component: NoticeListComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  
  { path: 'student-shownotice', component: StudentShowNoticeComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
  { path: '**', component: ErrorPageComponent }


]
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    UpdateNoticeComponent,

    StudentNoticeListComponent,
    NoticeAddComponent,
    NoticeListComponent,
    StudentDashboardComponent,

    StudentShowNoticeComponent,

    StaffNoticeListComponent,
    AdminLoginComponent,
    StudentRegisterComponent,
    StaffLoginComponent,

    StaffRegisterComponent,
    StudentLoginComponent,
    AppHomeComponent,
    
    AppContactUsComponent,
    ErrorPageComponent,
    AdminProfileComponent
  
  ],

  imports: [
BrowserModule,
  FormsModule,
  HttpClientModule,
  RouterModule.forRoot(routes)

  ],
  providers: [
    AdminService,
    StudentShowNoticeService,
    StudentListNoticeService,
    StaffListNoticeService,

    ListNoticeService,
    AddNoticeService,
    StaffService,
   
    StudentService,
    NoticeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
