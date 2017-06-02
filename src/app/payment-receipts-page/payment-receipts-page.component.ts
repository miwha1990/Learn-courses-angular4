import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentReceiptsPageService } from './payment-receipts-page.service'

@Component({
  selector: 'app-payment-receipts-page',
  templateUrl: './payment-receipts-page.component.html',
  styleUrls: ['./payment-receipts-page.component.scss']
})
export class PaymentReceiptsPageComponent implements OnInit {
  public receiptForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });
  constructor(public fb: FormBuilder, private paymentReceiptsPageService: PaymentReceiptsPageService) { }

  ngOnInit() {
  }
  formSubmit() {
    console.log(this.receiptForm.value);
    this.paymentReceiptsPageService.sendReceiptRequest(this.receiptForm.value);
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.formSubmit();
    }
  }
}
