import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: '', loadChildren: './home-page/homepage.module#HomepageModule' },
    { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
    { path: 'class', loadChildren: './class-single-page/class-single-page.module#ClassSinglePageModule' },
];
