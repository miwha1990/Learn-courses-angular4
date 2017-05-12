import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { ContactUsModule } from './contact-us/contact-us.module';
import {HomepageModule} from './home-page/homepage.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    AlertModule.forRoot(),
    ContactUsModule,
    HomepageModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
