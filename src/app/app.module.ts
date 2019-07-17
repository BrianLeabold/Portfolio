import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { NewsComponent} from './news/news.component';
import { PhotosComponent } from './photos/photos.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';


const config = {
  apiKey: 'AIzaSyAkYtXxjh6jdixAubK-3QArz-cd2Xm1Pww',
  authDomain: 'ang7portfolio.firebaseapp.com',
  databaseURL: 'https://ang7portfolio.firebaseio.com',
  projectId: 'ang7portfolio',
  storageBucket: 'ang7portfolio.appspot.com',
  messagingSenderId: '585128179364',
  appId: '1:585128179364:web:150d960488c5c26e'
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MyservicesComponent,
    NewsComponent,
    PhotosComponent,
    ContactComponent,
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
    AdminModule,
    BootstrapModule,
    NgbModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
