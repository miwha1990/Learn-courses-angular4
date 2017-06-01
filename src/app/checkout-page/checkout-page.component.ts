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
      class_id: [''],
      name_of_badge: [''],
      gender: [''],
      date_of_birth: [''],
}, {validator: this.matchingPasswords('email', 'confirm_email')});
  constructor(private OrderProcessService: OrderProcessService, private fb: FormBuilder) {}
  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    console.log(1111111111)
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey];
      const passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true});
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
