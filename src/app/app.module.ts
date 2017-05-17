import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { ContactUsModule } from './contact-us/contact-us.module';
import { HomepageModule } from './home-page/homepage.module';
import { ClassSinglePageModule } from './class-single-page/class-single-page.module';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPageModule } from './privacy-page/privacy-page.module';
import { TermsPageModule } from './terms-page/terms-page.module';
import { OurTeamModule } from './our-team/our-team.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
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
    ClassSinglePageModule,
    PrivacyPageModule,
    TermsPageModule,
    OurTeamModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
