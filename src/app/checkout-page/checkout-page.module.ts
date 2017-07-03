import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SelectModule } from 'ng2-select';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckoutPageRoutes } from './checkout-page.routing';
import { CheckoutPageComponent } from './checkout-page.component';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderProcessService} from '../services/order-process.service';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SelectModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MdNativeDateModule,
    RouterModule.forChild(CheckoutPageRoutes),
    MyDatePickerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    CheckoutPageComponent
  ],
  providers: [OrderProcessService]
})
export class CheckoutPageModule { }
