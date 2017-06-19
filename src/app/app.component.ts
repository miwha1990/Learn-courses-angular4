import { Component , ElementRef, AfterViewInit, Inject, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import {AlertsService} from './services/alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements  AfterViewInit , OnInit {
  routerHome = false;
  homeScrolled = false;
  private successFlag = false;
  private errorFlag = false;
  private successMessage = '';
  private errorMessage = '';
  constructor(private el: ElementRef,
              private router: Router,
              private location: Location,
              @Inject(DOCUMENT) private document: Document,
              private alertsService: AlertsService) {

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
