import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TermsPageRoutes } from './terms-page.routing';
import { TermsPageComponent } from './terms-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TermsPageRoutes),
  ],
  declarations: [TermsPageComponent]
})
export class TermsPageModule { }
