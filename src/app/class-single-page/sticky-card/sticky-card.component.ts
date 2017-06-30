import { Component, Input, OnChanges, Renderer2, OnInit} from '@angular/core';
import { OrderProcessService } from '../../services/order-process.service';

@Component({
  selector: 'app-sticky-card',
  templateUrl: './sticky-card.component.html',
  styleUrls: ['./sticky-card.component.scss']
})
export class StickyCardComponent implements  OnChanges, OnInit{
  @Input() data;
  cardContentEarly: string;
  cardContentRegular: string;
  constructor(
      private OrderProcessService: OrderProcessService,
      private rd: Renderer2,
  ) {}
  ngOnInit() {
    this.loadAddThis();
  }
  ngOnChanges() {
    if (this.data != null) {
// this.data.partner_url = 'https://stretchtowin.site-ym.com/events/register.aspx?id=909951&itemid=cf22259c-ca1d-41f4-9f2e-a769417b1680';
      if ( this.data.partner_url != null ) {
        if ( this.data.partner_soldout ) {
          this.cardContentRegular = this.cardContentEarly = 'Sold Out';
        }
      } else {
        if ( this.data.spots_early > 0 ) {
          this.cardContentEarly = this.data.spots_early + ' spots left';
        } else {
          this.cardContentEarly = 'Sold Out';
        }
        if ( this.data.spots_regular > 0 ) {
          this.cardContentRegular = this.data.spots_regular + ' spots left';
        } else {
          this.cardContentRegular = 'Sold Out';
        }
      }
    }
  }
  goToCheckout = function(){
    if ( this.data.partner_url != null ) {
      window.location.href = this.data.partner_url; // window.open - new tab option
    } else {
      this.OrderProcessService.checkOutInfoRequest(this.data.id).subscribe(
          data => {
            this.data.checkoutData = data.checkoutData;
            this.data.waiver = data.waiver;
            this.OrderProcessService.provideData(this.data);
          },
          err => console.error('ERROR', err)
      );
    };
  };
  loadAddThis() {
    (<any>window).addthis.layers.refresh();
  }
}
