import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import {jQueryStatic} from 'jquery';
import 'jquery';
declare const $: jQueryStatic;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  containerWidth: number ;
  constructor() { }

  ngAfterViewInit() {
    this.init();
  }
  init() {
    this.containerWidth = $($('.container')[0]).width();
  }
   slideLeft = function() {
    const self = this;
    $('#testimonials-carousel').animate({scrollLeft: ($('#testimonials-carousel').scrollLeft() + self.containerWidth)}, 1000);
  };
  slideRight = function() {
    const self = this;
    $('#testimonials-carousel').animate({scrollLeft: ($('#testimonials-carousel').scrollLeft() - self.containerWidth)}, 1000);
  };
}
