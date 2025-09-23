import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home';
import { AboutUsComponent } from '../Components/about-us/about-us';
import { ContactUs } from '../Components/contact-us/contact-us';
import { Price } from '../Components/price/price';
import { Serv } from '../Components/serv/serv';
import { Booking } from '../Components/booking/booking';
import { Error } from '../Components/error/error';
import { Homecleaning } from "../Components/homecleaning/homecleaning";
import { MovingCleaning } from '../Components/moving-cleaning/moving-cleaning';
import { Generalcleaning } from '../Components/generalcleaning/generalcleaning';
import { Windowcleaning } from '../Components/windowcleaning/windowcleaning';
import { Gallery } from '../Components/gallery/gallery';




export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'services', component: Serv },
  { path: 'pricing', component: Price },
  { path: 'contact', component: ContactUs },
  { path: 'booking', component: Booking },
  { path: 'photos', component: Error },
  { path: 'HomeCleaning', component: Homecleaning },
  { path: 'MovingCleaning', component: MovingCleaning },
  { path: 'GeneralCleaning', component: Generalcleaning },
   { path: 'WindowCleaning', component: Windowcleaning },
    { path: 'gallery', component: Gallery },
   { path: '**', component: Error },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}