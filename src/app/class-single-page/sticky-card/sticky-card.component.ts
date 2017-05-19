import { Component, OnInit, Input} from '@angular/core';
// import { ClassSinglePageComponent } from '../class-single-page.component';

@Component({
  selector: 'app-sticky-card',
  templateUrl: './sticky-card.component.html',
  styleUrls: ['./sticky-card.component.scss']
})
export class StickyCardComponent implements OnInit {
  @Input() data: {};
  constructor() { }

  ngOnInit() {}

}
