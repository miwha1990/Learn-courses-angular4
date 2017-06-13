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
    private couponActivated = false;
    private checkoutForm;
    private matchingEmailFlag = false;
    private partialPaymentChoosen = false;
    private params;
    private registration_data = {};
    private message: string;
    constructor(private OrderProcessService: OrderProcessService, private fb: FormBuilder) {
        this.params = {
            full_payment: 1,
            coupon_code: null
        };
        this.registration_data['full_payment'] = 1;
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
                cardholder_name: ['', Validators.required],
                cardholder_email: ['', Validators.required],
                cc_number: ['', Validators.required],
                cc_exp_month: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
                cc_exp_year: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
                cc_cvv: ['', Validators.required]
            }),
            newsletter: [''],
            agreement: [false, Validators.required],
            full_payment: this.fb.group(['full', Validators.required]),
        }, {validator: this.matchingEmail('email', 'confirm_email')});
    }
    applyCoupon() {
        this.params.coupon_code = this.checkoutForm.controls['coupon_code'].value;
        console.log(this.params);
        this.OrderProcessService.checkOutDataRequest(this.OrderProcessService.secretData['id'], this.params).subscribe(
            data => {
                this.OrderProcessService.secretData['checkoutData'] = data;
                this.couponActivated = true;
            },
            err => console.error('ERROR', err)
        );
    }
    applyPaymentType(val) {
        this.registration_data['full_payment'] = val.value;
        this.params.full_payment = val.value;
        console.log(this.params);
        this.OrderProcessService.checkOutDataRequest(this.OrderProcessService.secretData['id'], this.params).subscribe(
            data => {
                this.OrderProcessService.secretData['checkoutData'] = data;
                this.showOwingToggle();
            },
            err => console.error('ERROR', err)
        );
    }
    formSubmit() {
        // console.log(this.checkoutForm.value);
        this.registration_data['first_name'] = this.checkoutForm.value.first_name;
        this.registration_data['last_name'] = this.checkoutForm.value.last_name;
        this.registration_data['email'] = this.checkoutForm.value.email;
        this.registration_data['class_id'] = this.OrderProcessService.secretData['id'];
        this.registration_data['name_on_badge'] = this.checkoutForm.value.name_of_badge;
        this.registration_data['gender'] = this.checkoutForm.value.gender[0].id;
        this.registration_data['date_of_birth'] = this.checkoutForm.value.date_of_birth;
        this.registration_data['city'] = this.checkoutForm.value.city;
        this.registration_data['province'] = this.checkoutForm.value.state[0].id;
        this.registration_data['country'] = this.checkoutForm.value.country[0].id;
        this.registration_data['cardholder_name'] = this.checkoutForm.value.cc_group.cardholder_name;
        this.registration_data['cardholder_email'] = this.checkoutForm.value.cc_group.cardholder_email;
        this.registration_data['phone'] = this.checkoutForm.value.phone;
        this.registration_data['industry_certification'] = this.checkoutForm.value.industry_certification[0].id;
        this.registration_data['employer'] = this.checkoutForm.value.employer;
        this.registration_data['job_title'] = this.checkoutForm.value.job_title[0].id;
        this.registration_data['emergency_name'] = this.checkoutForm.value.emergency_name;
        this.registration_data['emergency_phone'] = this.checkoutForm.value.emergency_phone;
        this.registration_data['referrer'] = this.checkoutForm.value.refferel[0].id;
        this.registration_data['tshirt_size'] = this.checkoutForm.value.tshirt_size[0].id;
        this.registration_data['amount'] = this.OrderProcessService.secretData['checkoutData']['total'];
        this.registration_data['coupon_code'] = this.checkoutForm.value.coupon_code;
        this.registration_data['waiver_id'] = this.OrderProcessService.secretData['waiver']['id'];
        this.registration_data['newsletter'] = this.checkoutForm.value.newsletter;
        // console.log(this.registration_data);
        this.getToken();
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
        event.preventDefault();
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
            if (status === 200) {
                this.message = `Success! Card token ${response.card.id}.`;
                this.registration_data['stripe_source'] = response.card.id;
                this.send_registration_data();
            } else {
                this.message = response.error.message;
            }
        });
    }
    send_registration_data() {
        this.OrderProcessService.sendRegistrationData(this.registration_data)
            .subscribe(
                data => {
                   console.log(data);
                } ,
                err => console.error('ERRROR', err)
            );
    }

}

