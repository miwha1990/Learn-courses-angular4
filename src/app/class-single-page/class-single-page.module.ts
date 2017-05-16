import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClassSinglePageComponent } from './class-single-page.component';

import { ClassSinglePageRoutes} from './class-single-page.routing';

import { GetClassDataService } from './get-class-data.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClassSinglePageRoutes),
  ],
  declarations: [
    ClassSinglePageComponent
  ],
  providers: [
      GetClassDataService,
  ]
})
export class ClassSinglePageModule { }



