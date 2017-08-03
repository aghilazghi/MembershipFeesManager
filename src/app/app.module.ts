import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersComponent } from './components/members/members.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingComponent } from './components/setting/setting.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { MemberService } from './services/member.service';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-member', component: AddMemberComponent },
  { path: 'member/:id', component: MemberDetailsComponent }
];

export const firebaseConfig = {
    apiKey: 'AIzaSyA6lAUPkyFVg4dVE71mHOTfLHPVzhne-Xg',
    authDomain: 'membershipfeesmanager.firebaseapp.com',
    databaseURL: 'https://membershipfeesmanager.firebaseio.com',
    storageBucket: 'membershipfeesmanager.appspot.com',
    messagingSenderId: '943347794197'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MembersComponent,
    MemberDetailsComponent,
    AddMemberComponent,
    EditMemberComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
