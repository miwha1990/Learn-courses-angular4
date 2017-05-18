import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent {
    emailValid = this.formBuilder.group({
      email: ["", [Validators.required, Validators.pattern('^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z]([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$')]]
  });

  constructor(public formBuilder: FormBuilder) {}


}
