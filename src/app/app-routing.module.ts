import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {  MyservicesComponent} from './myservices/myservices.component';
import { NewsComponent} from './news/news.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactComponent } from './contact/contact.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component:  HomeComponent },
  { path: 'services', component: MyservicesComponent},
  {path: 'news', component : NewsComponent},
  { path: 'photos', component: PhotosComponent},
  { path: 'contact', component:  ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
