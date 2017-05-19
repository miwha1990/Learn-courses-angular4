import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckoutPageRoutes } from './checkout-page.routing';
import { CheckoutPageComponent } from './checkout-page.component';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MdNativeDateModule,
    RouterModule.forChild(CheckoutPageRoutes)
  ],
  declarations: [
    CheckoutPageComponent
  ]
})
export class CheckoutPageModule { }
