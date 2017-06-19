import { Component, OnInit, HostListener, ElementRef, Input} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() routerHome: boolean;
  @Input() homeScrolled: boolean;
  slidebarFlag = false;
  headerVisible: boolean;
  constructor(private el: ElementRef, private router: Router, private location: Location) {
    this.headerVisible = true;
  }

  ngOnInit() {}
  changeFlag(event) {
    event.stopPropagation();
    return this.slidebarFlag = !this.slidebarFlag;
  }
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
      this.slidebarFlag = false;
    }

  refresh(){
    if(window.location.pathname === '/learn-in-class') {
      location.reload();
    }
    return;
  }
}
