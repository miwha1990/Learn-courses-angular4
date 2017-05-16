import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage-static-info',
  templateUrl: './homepage-static-info.component.html',
  styleUrls: ['./homepage-static-info.component.scss']
})
export class HomepageStaticInfoComponent implements OnInit {
  public subscribeForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])]
  });
  constructor(public fb: FormBuilder) {}
  ngOnInit() {
  }
  formSubmit() {
    console.log(this.subscribeForm.value);
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.formSubmit();
    }
  }
}
