import { Component , ElementRef, AfterViewInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements  AfterViewInit {
  routerHome = false;
  constructor(private el: ElementRef, private router: Router, private location: Location) {

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
}
