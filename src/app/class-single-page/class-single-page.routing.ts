import { Routes } from '@angular/router';

import { ClassSinglePageComponent } from './class-single-page.component';

export const ClassSinglePageRoutes: Routes = [
    { path: 'class/:id', component: ClassSinglePageComponent }
];
