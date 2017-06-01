import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderProcessService} from '../services/order-process.service';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  public checkoutForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])]
  });
  constructor(private OrderProcessService: OrderProcessService, private fb: FormBuilder) { }
  ngOnInit() {
  }
  formSubmit() {
    // this.OrderProcessService.processClick(this.checkoutForm.value);
    console.log(this.checkoutForm.value);
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.formSubmit();
    }
  }
}
