import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: '', loadChildren: './home-page/homepage.module#HomepageModule' },
    { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
    { path: 'class', loadChildren: './class-single-page/class-single-page.module#ClassSinglePageModule' },
    { path: 'privacy', loadChildren: './privacy-page/privacy-page.module#PrivacyPageModule' },
    { path: 'terms', loadChildren: './terms-page/terms-page.module#TermsPageModule' },
    { path: 'our-team', loadChildren: './our-team/our-team.module#OurTeamModule' },
    { path: 'checkout-page', loadChildren: './checkout-page/checkout-page.module#CheckoutPageModule' },
    { path: 'find-courses', loadChildren: './find-courses-page/find-courses.module#FindCoursesModule' }
];
