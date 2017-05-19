import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { ContactUsRoutes } from './contact-us.routing';

import { ContactUsService } from './contact-us.service';

import { ContactUsComponent } from './contact-us.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ContactUsRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOvCGpfetHTFZPjOa6U-UhRHHS-6OeGhU'
    })
  ],
  declarations: [
    ContactUsComponent,
    ContactUsFormComponent,
    ContactsComponent
  ],
  providers: [ ContactUsService ]
})
export class ContactUsModule { }
