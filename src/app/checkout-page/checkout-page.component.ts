import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  couponActivated = false;
  constructor() { }

  ngOnInit() {
  }

  applyCoupon() {
    this.couponActivated = true;
  }
}
