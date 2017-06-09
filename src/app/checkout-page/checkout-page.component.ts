import { Component, OnInit, ViewChild ,NgZone} from '@angular/core';
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
    private couponActivated = false;
    private checkoutForm;
    private matchingEmailFlag = false;
    private partialPaymentChoosen = false;
    private params;

    message: string;
    constructor(private OrderProcessService: OrderProcessService, private fb: FormBuilder,private _zone: NgZone) {
        this.params = {
            full_payment: 1,
            coupon_code: null
        };
    }
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
            coupon_code: [''],
            cc_group: this.fb.group({
                cc_holder_name: ['', Validators.required],
                cc_holder_email: ['', Validators.required],
                cc_number: ['', Validators.required],
                cc_exp_month: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
                cc_exp_year: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
                cc_cvv: ['', Validators.required]
            }),
        }, {validator: this.matchingEmail('email', 'confirm_email')});
    }

    applyCoupon() {
        this.params.coupon_code = this.checkoutForm.controls['coupon_code'].value;
        console.log(this.params);
        this.OrderProcessService.checkOutInfoRequest(this.OrderProcessService.secretData['id'], this.params).subscribe(
            data => {
                this.OrderProcessService.secretData['checkoutData'] = data.checkoutData;
                this.OrderProcessService.secretData['waiver'] = data.waiver;
                this.couponActivated = true;
            },
            err => console.error('ERROR', err)
        );
    }
    applyPaymentType(val) {
        this.params.full_payment = val;
        console.log(this.params);
        this.OrderProcessService.checkOutInfoRequest(this.OrderProcessService.secretData['id'], this.params).subscribe(
            data => {
                this.OrderProcessService.secretData['checkoutData'] = data.checkoutData;
                this.OrderProcessService.secretData['waiver'] = data.waiver;
                this.showOwingToggle();
            },
            err => console.error('ERROR', err)
        );
    }
    formSubmit() {
        this.getToken();
        console.log(this.checkoutForm.value);
    }
    showOwingToggle() {
        this.partialPaymentChoosen = !this.partialPaymentChoosen;
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
    getToken() {
        this.message = 'Loading...';

        (<any>window).Stripe.card.createToken({
            number: this.checkoutForm.controls['cc_group'].controls['cc_number'].value,
            exp_month: this.checkoutForm.controls['cc_group'].controls['cc_exp_month'].value,
            exp_year: this.checkoutForm.controls['cc_group'].controls['cc_exp_year'].value,
            cvc: this.checkoutForm.controls['cc_group'].controls['cc_cvv'].value
        }, (status: number, response: any) => {
            // Wrapping inside the Angular zone
            this._zone.run(() => {
                if (status === 200) {
                    this.message = `Success! Card token ${response.card.id}.`;
                } else {
                    this.message = response.error.message;
                }
            });
        });
    }

}
