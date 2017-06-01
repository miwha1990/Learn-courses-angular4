import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderProcessService} from '../services/order-process.service';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {

  checkoutForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      // matching_Emails: this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      confirm_email: ['', [Validators.required, Validators.email]],
      // }, this.matchingEmails('matching_Emails')),
      // class_id: [''],
      // name_of_badge: [''],
      // gender: [''],
      // date_of_birth: [''],
}, {validator: this.matchingPasswords('email', 'confirm_email')});
  // emailsGroup = this.checkoutForm.controls.matching_Emails;

  constructor(private OrderProcessService: OrderProcessService, private fb: FormBuilder) {
    //
    // this.checkoutForm = this.fb.group({
    //     first_name: ['', Validators.required],
    //     last_name: ['', Validators.required],
    //     matching_Emails: this.fb.group({
    //       email: ['', Validators.compose([Validators.required, Validators.email])],
    //       confirm_email: ['', Validators.compose([Validators.required, Validators.email])],
    //     }, {this.matchingEmails('matching_Emails')}),
    //     class_id: [''],
    //     name_of_badge: [''],
    //     gender: [''],
    //     date_of_birth: [''],
    //   });
    //   this.emailsGroup = this.checkoutForm.controls.matching_Emails;
    //



  }


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
  formSubmit() {
    // this.OrderProcessService.processClick(this.checkoutForm.value);
    console.log(this.checkoutForm.value);
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.formSubmit();
    }
  }
  // matchingEmails(keyName: string): any {
  //   console.log(this.checkoutForm);
  //   const group = this.checkoutForm.controls[keyName];
  //   const email = group.controls.email;
  //   const confirm_email = group.controls.confirm_email;
  //
  //   // Don't kick in until user touches both fields
  //   if (email.pristine || confirm_email.pristine) {
  //     return null;
  //   }
  //
  //   // Mark group as touched so we can add invalid class easily
  //   group.markAsTouched();
  //
  //   if (email.value === confirm_email.value) {
  //     return null;
  //   }
  //
  //   return {
  //     isValid: false
  //   };
  // }
}
// “class_id”: 1,
  //     "name_on_badge": "Name",
  //     "gender": "male",
  //     "date_of_birth": "2000-01-24", # always YYYY-MM-DD
// "address":
// {
//   "city": "Toronto",
//     "province": "Ontario",
//     "country": "Canada",
// },
// "phone": "+1 (234) 567-8900",
//     "industry_certification": "xxx",
//     "employer": "company name",
//     "job_title": "title",
//     "emergency_name": "Full Name",
//     "emergency_phone": "+1 (234) 567-8900",
//     "refferel": "text",
//     "tshirt_size": "40-42",
//     "full_payment": True, # False if 'Pay Deposit Only' was selected
// "amount": "302.50", # from 'Total' on 'Checkout' moqup
// "stripe_source": "string_token", # from stripe.js
// "coupon_code": "code," # can be null,
// “waiver_id”: “string_id” # id of the shawn waiver
