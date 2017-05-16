import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrivacyPageComponent } from './privacy-page.component';
import { PrivacyPageRoutes } from './privacy-page.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PrivacyPageRoutes),
  ],
  declarations: [PrivacyPageComponent]
})
export class PrivacyPageModule { }
