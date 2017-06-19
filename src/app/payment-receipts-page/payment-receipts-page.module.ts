import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentReceiptsPageComponent } from './payment-receipts-page.component';
import { RouterModule} from '@angular/router';
import { PaymentReceiptsPageRoutes } from './payment-receipts-page.routing';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentReceiptsPageService } from './payment-receipts-page.service';
import { AlertsService } from '../services/alerts.service';

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
  providers: [
      PaymentReceiptsPageService,
      AlertsService,
  ]
})
export class PaymentReceiptsPageModule { }
