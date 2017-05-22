import { Component , ElementRef, AfterViewInit, Inject, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements  AfterViewInit {
  routerHome = false;
  homeScrolled = false;
  constructor(private el: ElementRef, private router: Router, private location: Location, @Inject(DOCUMENT) private document: Document) {

  }
  ngAfterViewInit() {
    this.router.events.subscribe(val => {
      if ((this.location.path() === '/home') || (this.location.path() === '')) {
        this.routerHome = true;
      } else {
        this.routerHome = false;
      }
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const position = this.document.body.scrollTop;
    if (position > (window.innerHeight - 50)) {
      this.homeScrolled = true;
    } else {
      this.homeScrolled = false;
    }
  }
}
