import { Component, Inject, OnInit, AfterViewInit, HostListener } from '@angular/core';
import {jQueryStatic} from 'jquery';
import 'jquery';
declare const $: jQueryStatic;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  containerWidth: number;
  elementsCount: number;
  maxWidth: number;
  hideLeftButton: boolean;
  hideRightButton: boolean;
  constructor() { }

  ngAfterViewInit() {
    this.calculateParams();
    this.hideLeftButton = false;
    this.hideRightButton = true;
  }
  calculateParams = function(){
    this.containerWidth = ($($('.carousel-container')[0]))[0].offsetWidth;
    this.elementsCount = $('.carousel-element').length;
    this.maxWidth = (this.elementsCount - 1) * this.containerWidth;
  };
  changeIndicator = function(){
    $('ol.carousel-indicators li.active').removeClass('active');
    const arrayPosition = $('#testimonials-carousel').scrollLeft() / this.containerWidth;
    $($('ol.carousel-indicators li')[arrayPosition]).addClass('active');
  };
   slideLeft = function(param: number) {
     if ($('#testimonials-carousel').is(':animated')) {
       return;
     }
    const self = this;
    self.hideRightButton = false;
    $('#testimonials-carousel').animate({scrollLeft: ($('#testimonials-carousel').scrollLeft() + param)}, 600, function(){
      if ($('#testimonials-carousel').scrollLeft() === self.maxWidth) {
        self.hideLeftButton = true;
      } else {
        self.hideLeftButton = false;
      }
     self.changeIndicator();
    });
  };
  slideRight = function(param: number) {
    if ($('#testimonials-carousel').is(':animated')) {
      return;
    }
    const self = this;
    self.hideLeftButton = false;
    $('#testimonials-carousel').animate({scrollLeft: ($('#testimonials-carousel').scrollLeft() - param)}, 600, function() {
      if ($('#testimonials-carousel').scrollLeft() === 0) {
        self.hideRightButton = true;
      } else {
        self.hideRightButton = false;
      }
      self.changeIndicator();
    });
  };
  proceedDotClick = function(event){
    const currentOffset = $($('ol.carousel-indicators li.active')[0].dataset.slideTo)[0].offsetLeft;
    const targetOffset = $(event.target.dataset.slideTo)[0].offsetLeft;
    if ( targetOffset > currentOffset ) {
      this.slideLeft(targetOffset - currentOffset);
    } else if ( targetOffset < currentOffset ) {
      this.slideRight(currentOffset - targetOffset);
    } else {
      return;
    }
  };
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateParams();
  }
}
