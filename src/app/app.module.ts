import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"guardianes-b8a4b","appId":"1:1080376418573:web:fa90421b4ffc50de579044","storageBucket":"guardianes-b8a4b.firebasestorage.app","apiKey":"AIzaSyCw4EXlM7fZjkhkUV57wLFWA5JkCZF9otk","authDomain":"guardianes-b8a4b.firebaseapp.com","messagingSenderId":"1080376418573"})), provideAuth(() => getAuth())],
  bootstrap: [AppComponent],
})
export class AppModule {}
