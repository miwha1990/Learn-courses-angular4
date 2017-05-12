import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
    { path: '', loadChildren: './home-page/homepage.module#HomepageModule' }
];
