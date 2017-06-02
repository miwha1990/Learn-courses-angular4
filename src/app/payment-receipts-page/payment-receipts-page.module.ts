import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentReceiptsPageComponent } from './payment-receipts-page.component';
import { RouterModule} from '@angular/router';
import { PaymentReceiptsPageRoutes } from './payment-receipts-page.routing';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PaymentReceiptsPageRoutes),
    MdButtonModule,
    MdInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ PaymentReceiptsPageComponent ],
  providers: []
})
export class PaymentReceiptsPageModule { }
