import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClassSinglePageComponent } from './class-single-page.component';
import { ClassSinglePageRoutes} from './class-single-page.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClassSinglePageRoutes),
  ],
  declarations: [
    ClassSinglePageComponent
  ]
})
export class ClassSinglePageModule { }



