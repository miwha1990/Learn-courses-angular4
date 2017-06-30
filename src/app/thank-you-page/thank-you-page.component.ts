import { Component, OnInit, Renderer2 } from '@angular/core';
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
