import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authFire = inject(AngularFireAuth)



  constructor() { }

  loginWithGoogle() {
    return this.authFire.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  
}
