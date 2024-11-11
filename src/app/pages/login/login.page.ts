import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authService = inject(AuthService)

  async loginWithGoogle(){
    this.authService.loginWithGoogle()
  }
  ngOnInit(){}

}
