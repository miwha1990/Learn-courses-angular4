import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HomepageService } from '../homepage.service';
import {AlertsService} from '../../services/alerts.service';
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
  constructor(public fb: FormBuilder,
              private homepageService: HomepageService,
              private alertsService: AlertsService) {}
  ngOnInit() {
  }
  isEmpty = function(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  };
  formSubmit() {
    console.log(this.subscribeForm.value);
    this.homepageService.sendSubscription(this.subscribeForm.value)
      .subscribe(
        data => {
          console.log(data)
          if (this.isEmpty(data)) {
            this.alertsService.showAlert({
              'success': true,
              'error': false,
              'message': ''
            });
          } else {
            this.alertsService.showAlert({
              'success': false,
              'error': true,
              'message': ''
            });
          }
        },
        err => console.error('ERRROR', err)
      );
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.formSubmit();
    }
  }
}
