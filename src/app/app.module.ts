import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pages/header/header.component';
import { MatFormFieldModule,MatButtonModule, MatInputModule,MatIconModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import { HoldingPageComponent } from './pages/holding-page/holding-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {SlideshowModule} from 'ng-simple-slideshow';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WhatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { FooterComponent } from './pages/footer/footer.component';



@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    HoldingPageComponent,
    WelcomePageComponent,
    AboutUsComponent,
    WhatWeDoComponent,
    ServicesComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    SlickCarouselModule,
    SlideshowModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
