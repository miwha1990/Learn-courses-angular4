import { Component, OnInit, Renderer2} from '@angular/core';
import { OrderProcessService} from '../services/order-process.service';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent implements OnInit {

  constructor(
      private OrderProcessService: OrderProcessService,
      private rd: Renderer2,
  ) { }

  ngOnInit() {
    this.loadAddThis();
  }
  loadAddThis() {
    (<any>window).addthis.layers.refresh();
  }
}
