import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  authService = inject(AuthService)

  async loginWithGoogle(){
    this.authService.loginWithGoogle()
  }

}
