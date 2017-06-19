import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentReceiptsPageService } from './payment-receipts-page.service';
import {AlertsService} from '../services/alerts.service';

@Component({
  selector: 'app-payment-receipts-page',
  templateUrl: './payment-receipts-page.component.html',
  styleUrls: ['./payment-receipts-page.component.scss']
})
export class PaymentReceiptsPageComponent implements OnInit {
  public receiptForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });
  constructor(public fb: FormBuilder,
              private paymentReceiptsPageService: PaymentReceiptsPageService,
              private alertsService: AlertsService) { }

  ngOnInit() {
  }
  isEmpty = function(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};
  formSubmit() {
    // console.log(this.receiptForm.value);
    this.paymentReceiptsPageService.sendReceiptRequest(this.receiptForm.value)
        .subscribe(
            data => {
              if (this.isEmpty(data)) {
                this.alertsService.showAlert({
                  'success': true,
                  'error': false,
                  'message': 'Your  Payment Receipts have been sent. Please check your email.'
                });
              } else {
                this.alertsService.showAlert({
                  'success': false,
                  'error': true,
                  'message': 'There are no Payment Receipts associated with this email address.'
                });
              }
            } ,
            err => console.error('ERRROR', err)
        );
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.formSubmit();
    }
  }
  // showSuccess = function(){
  //   this.successFlag = true;
  // };
  // showError = function(){
  //   this.errorFlag = true;
  // };
}
