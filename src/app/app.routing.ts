import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', loadChildren: './home-page/homepage.module#HomepageModule' },
    { path: 'contact-support', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
    { path: 'class', loadChildren: './class-single-page/class-single-page.module#ClassSinglePageModule' },
    { path: 'privacy-statement', loadChildren: './privacy-page/privacy-page.module#PrivacyPageModule' },
    { path: 'terms-of-service', loadChildren: './terms-page/terms-page.module#TermsPageModule' },
    { path: 'team', loadChildren: './our-team/our-team.module#OurTeamModule' },
    { path: 'checkout-page', loadChildren: './checkout-page/checkout-page.module#CheckoutPageModule' },
    { path: 'learn-in-class', loadChildren: './find-courses-page/find-courses.module#FindCoursesModule' },
    { path: 'thank-you', loadChildren: './thank-you-page/thank-you-page.module#ThankYouPageModule' },
    { path: 'payment-receipts', loadChildren: './payment-receipts-page/payment-receipts-page.module#PaymentReceiptsPageModule' },
];
