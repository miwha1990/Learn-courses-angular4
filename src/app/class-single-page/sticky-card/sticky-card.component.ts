import { Component, Input, OnChanges, Renderer2, OnInit} from '@angular/core';
import { OrderProcessService } from '../../services/order-process.service';

@Component({
  selector: 'app-sticky-card',
  templateUrl: './sticky-card.component.html',
  styleUrls: ['./sticky-card.component.scss']
})
export class StickyCardComponent implements  OnChanges, OnInit {
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
      console.log(this);
    (<any>window).addthis_reload = function() {
      console.log(this);
      if (!(<any>window).addthis) {
        window['addthis_config'] = { 'data_track_addressbar' : false };
        const scriptAddThis = this.rd.createElement('script');
          scriptAddThis.setAttribute('src', 'https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-58d3fa248bcf8743');
          scriptAddThis.setAttribute('type', 'text/javascript');
          window.document.getElementsByTagName('body')[0].appendChild(scriptAddThis);
      } else {
        window['addthis_share'].url = window.location.href;
        window['addthis_share'].title = window.document.title;
        (<any>window).addthis.toolbox('.addthis_toolbox');
      }
    }.bind(this);
    (<any>window).addthis_reload();
  }
}
