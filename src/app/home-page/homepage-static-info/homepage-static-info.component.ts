import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HomepageService } from '../homepage.service';
@Component({
  selector: 'app-homepage-static-info',
  templateUrl: './homepage-static-info.component.html',
  styleUrls: ['./homepage-static-info.component.scss']
})
export class HomepageStaticInfoComponent implements OnInit {

  public subscribeForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    // inf_form_xid: ['8786052e6d747e1c43f5503af7139669'],
    // inf_form_name: ['Newsletter Sign Up'],
    // infusionsoft_version: ['1.65.0.68']
  });
  constructor(public fb: FormBuilder, private homepageService: HomepageService) {}
  ngOnInit() {
  }
  formSubmit() {
    console.log(this.subscribeForm.value);
    this.homepageService.sendSubscription(this.subscribeForm.value)
      .subscribe(
        data => console.log(data),
        err => console.error('ERRROR', err)
      );
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.formSubmit();
    }
  }
}
