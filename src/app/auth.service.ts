import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authFire = inject(AngularFireAuth)
  router = inject(Router)



  constructor() { }

  loginWithGoogle() {
    return this.authFire.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  

  get currentUser(): Observable<any> {
    return this.authFire.authState;
  }

  routerLink(url: string) {
    return this.router.navigate([url]);
  }
}
