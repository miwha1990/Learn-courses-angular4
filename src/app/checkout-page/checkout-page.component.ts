import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderProcessService} from '../services/order-process.service';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  couponActivated = false;
  checkoutForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirm_email: ['', [Validators.required, Validators.email]],
      country:  ['', Validators.required],
      state:  ['', Validators.required],
      name_of_badge: ['', Validators.required],
      city:  ['', Validators.required],
      gender: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      phone: ['', Validators.required],
      industry_certification: ['', Validators.required],
      employer: ['', Validators.required],
      job_title: ['', Validators.required],
      emergency_name: ['', Validators.required]
}, {validator: this.matchingEmail('email', 'confirm_email')});


  constructor(private OrderProcessService: OrderProcessService, private fb: FormBuilder) {}


  matchingEmail(email: string, emailConfirmation: string) {
    return (group: FormGroup) => {
      const emailInput = group.controls[email];
      const emailConfirmationInput = group.controls[emailConfirmation];
      if (emailInput.value !== emailConfirmationInput.value) {
        return emailConfirmationInput.setErrors({notEquivalent: true});
      }
    };
  }


  ngOnInit() {

  }


  applyCoupon() {
    this.couponActivated = true;
  }


  formSubmit() {
    console.log(this.checkoutForm.value);
  }


  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.formSubmit();
    }
  }


}
