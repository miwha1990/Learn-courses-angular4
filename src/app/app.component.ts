import { Component , ElementRef, AfterViewInit, Inject, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements  AfterViewInit , OnInit {
  routerHome = false;
  homeScrolled = false;
  headerVisible: boolean;
  constructor(private el: ElementRef, private router: Router, private location: Location, @Inject(DOCUMENT) private document: Document) {
    this.headerVisible = true;
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

  }

  ngAfterViewInit() {
    this.router.events.subscribe(val => {
      if ((this.location.path() === '/home') || (this.location.path() === '')) {
        this.routerHome = true;
        this.headerVisible = true;
      }
      else if ((this.location.path() === '/checkout-page')) {
         this.headerVisible = false;
         this.routerHome = false;
      }
      else {
        this.routerHome = false;
        this.headerVisible = true;
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
