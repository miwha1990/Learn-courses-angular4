import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { ContactUsModule } from './contact-us/contact-us.module';
import { HomepageModule } from './home-page/homepage.module';
import { ClassSinglePageModule } from './class-single-page/class-single-page.module';
import { StickyModule } from 'ng2-sticky-kit/ng2-sticky-kit';
import { MdButtonModule } from '@angular/material';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPageModule } from './privacy-page/privacy-page.module';
import { TermsPageModule } from './terms-page/terms-page.module';
import { OurTeamModule } from './our-team/our-team.module';
import { CheckoutPageModule } from './checkout-page/checkout-page.module';
import { FindCoursesModule } from './find-courses-page/find-courses.module';
import { ThankYouPageModule } from './thank-you-page/thank-you-page.module';
import { PaymentReceiptsPageModule } from './payment-receipts-page/payment-receipts-page.module';
import { SafeResourceUrlModule } from './shared/safe-resourse-url/safe-resource-url.module';

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
    OurTeamModule,
    StickyModule,
    CheckoutPageModule,
    FindCoursesModule,
    MdButtonModule,
    ThankYouPageModule,
    PaymentReceiptsPageModule,
    SafeResourceUrlModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
