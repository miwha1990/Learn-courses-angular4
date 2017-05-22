import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', loadChildren: './home-page/homepage.module#HomepageModule' },
    { path: 'contact_support', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
    { path: 'class', loadChildren: './class-single-page/class-single-page.module#ClassSinglePageModule' },
    { path: 'privacy_statement', loadChildren: './privacy-page/privacy-page.module#PrivacyPageModule' },
    { path: 'terms_of_service', loadChildren: './terms-page/terms-page.module#TermsPageModule' },
    { path: 'team', loadChildren: './our-team/our-team.module#OurTeamModule' },
    { path: 'checkout-page', loadChildren: './checkout-page/checkout-page.module#CheckoutPageModule' },
];
