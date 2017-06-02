import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-payment-receipts-page',
  templateUrl: './payment-receipts-page.component.html',
  styleUrls: ['./payment-receipts-page.component.scss']
})
export class PaymentReceiptsPageComponent implements OnInit {
  public receiptForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }
  formSubmit() {
    console.log(this.receiptForm.value);
    // this.homepageService.sendSubscription(this.receiptForm.value);
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.formSubmit();
    }
  }
}
