import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ContactUsService} from '../contact-us.service';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent {
  resp;
  emailValid = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.pattern('^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z]([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$')]],
      subject: [''],
      body: ['', Validators.required]
  });

  constructor(public formBuilder: FormBuilder, private ContactUsService: ContactUsService) {}

  formSubmit() {
    console.log(this.emailValid.value);
    this.ContactUsService.sendContactRequest(this.emailValid.value)
        .subscribe(
            data => this.resp = data,
            err => console.error('ERROR', err)
        );
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.formSubmit();
    }
  }
}
