import { Member } from './../models/member';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;
  member: FirebaseObjectObservable<any>;

  constructor(public afDb: AngularFireDatabase) {
    this.members = this.afDb.list('/members') as FirebaseListObservable<Member[]>;
   }

   getMembers() {
     return this.members;
   }

}