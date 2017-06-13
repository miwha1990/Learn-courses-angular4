import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MdInputModule } from '@angular/material'

import { ContactUsRoutes } from './contact-us.routing';

import { ContactUsService } from './contact-us.service';

import { ContactUsComponent } from './contact-us.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { ContactsComponent } from './contacts/contacts.component';
import {GoogleMapsModule} from 'google-maps-angular2/dist/src/app/google-maps.module';
import {GoogleMapsService} from 'google-maps-angular2/dist/src/app/google-maps.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ContactUsRoutes),
    MdInputModule,
    GoogleMapsModule.forRoot({
      url: 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBOvCGpfetHTFZPjOa6U-UhRHHS-6OeGhU'
    })
  ],
  declarations: [
    ContactUsComponent,
    ContactUsFormComponent,
    ContactsComponent,
  ],
  providers: [ ContactUsService, GoogleMapsService]
})
export class ContactUsModule { }
