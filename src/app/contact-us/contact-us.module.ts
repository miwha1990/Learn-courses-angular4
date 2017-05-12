import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactUsRoutes } from './contact-us.routing';

import { ContactUsService } from './contact-us.service';

import { ContactUsComponent } from './contact-us.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContactUsRoutes)
  ],
  declarations: [
    ContactUsComponent,
    ContactUsFormComponent
  ],
  providers: [ ContactUsService ]
})
export class ContactUsModule { }
