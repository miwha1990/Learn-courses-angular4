import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import {ContactUsService} from '../contact-us.service';
import {AlertsService} from '../../services/alerts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent {
  emailValid;

  constructor(public formBuilder: FormBuilder,
              private ContactUsService: ContactUsService,
              private alertsService: AlertsService,
              private router: Router) {
      this.createForm();
  }
    isEmpty = function(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    };
  createForm() {
      this.emailValid = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          subject: [''],
          body: ['', Validators.required]
      });
  }
  formSubmit() {
    console.log(this.emailValid.value);
    const formData = this.emailValid.value;
    for (const name in this.emailValid.controls) {
       if (this.emailValid.controls.hasOwnProperty(name)) {
           (<FormControl>this.emailValid.controls[name]).patchValue('');
            this.emailValid.controls[name].setErrors(null);
     }
    }
    this.ContactUsService.sendContactRequest(formData)
        .subscribe(
            data => {
                if (this.isEmpty(data)) {
                    this.alertsService.showAlert({
                        'success': true,
                        'error': false,
                        'message': 'Thanks for contacting us! We will get in touch with you shortly.'
                    });
                } else {
                    this.alertsService.showAlert({
                        'success': false,
                        'error': true,
                        'message': 'Error!'
                    });
                }
            },
            err => console.error('ERROR', err)
      // Thanks for contacting us! We will get in touch with you shortly.
        );
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.formSubmit();
    }
  }
}
