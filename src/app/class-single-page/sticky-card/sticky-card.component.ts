import { Component, Input, OnChanges} from '@angular/core';
import { OrderProcessService } from '../../services/order-process.service';
@Component({
  selector: 'app-sticky-card',
  templateUrl: './sticky-card.component.html',
  styleUrls: ['./sticky-card.component.scss']
})
export class StickyCardComponent implements  OnChanges {
  @Input() data;
  cardContentEarly: string;
  cardContentRegular: string;
  constructor(private OrderProcessService: OrderProcessService) { }
  ngOnChanges() {
    if (this.data != null) {
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
    this.OrderProcessService.checkOutRequest(this.data.id).subscribe(
        data => {
          this.data.checkoutData = data;
          this.OrderProcessService.provideData(this.data);
        },
        err => console.error('ERROR', err)
    );
  };
}
