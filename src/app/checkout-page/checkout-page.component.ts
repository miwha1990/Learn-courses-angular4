import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderProcessService} from '../services/order-process.service';
import { IMyDpOptions, IMyDateModel} from 'mydatepicker';
import {MyDatePicker} from 'mydatepicker/dist/my-date-picker.component';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
    @ViewChild('mydp') mydp: MyDatePicker;
    private myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'yyyy-mm-dd',
        showClearDateBtn: false,
        showInputField: false,
        showSelectorArrow: false,
        sunHighlight: false,
        showTodayBtn: false,
        alignSelectorRight: true,
    };
    couponActivated = false;
    showOwing = false;
    private checkoutForm;
    private pickerValue;
    private matchingEmailFlag = false;
    constructor(private OrderProcessService: OrderProcessService, private fb: FormBuilder) {}
    matchingEmail(email: string, emailConfirmation: string) {
    return (group: FormGroup) => {
      const emailInput = group.controls[email];
      const emailConfirmationInput = group.controls[emailConfirmation];
        if ( emailInput.touched && emailConfirmationInput.touched) {
            if (emailInput.value  !== emailConfirmationInput.value) {
                this.matchingEmailFlag = false;
                return emailConfirmationInput.setErrors({notEquivalent: true});
            } else {
                this.matchingEmailFlag = true;
            }
        }
    };
    }
    ngOnInit() {
        this.checkoutForm = this.fb.group({
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
            emergency_name: ['', Validators.required],
            emergency_phone: ['', Validators.required],
            refferel: ['', Validators.required],
            tshirt_size:  ['', Validators.required],
        }, {validator: this.matchingEmail('email', 'confirm_email')});
    }

  applyCoupon() {
    this.couponActivated = true;
  }


  formSubmit() {
    console.log(this.checkoutForm.value);
  }
    showOwingToggle() {
       this.showOwing = !this.showOwing;
    }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.formSubmit();
    }
  }

    onDateChanged(event: IMyDateModel) {
       this.checkoutForm.controls['date_of_birth'].setValue(event.formatted);
    }

    onToggleSelector(event) {
        event.stopPropagation();
        this.mydp.openBtnClicked();
    }
}
