import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  slidebarFlag = false;
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  changeFlag() {
    return this.slidebarFlag = !this.slidebarFlag;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkForSticky();
  }
  checkForSticky = function(){
    const offset: number = this.el.nativeElement.parentElement.offsetTop - this.el.nativeElement.offsetTop;
    console.log(offset);
    return null;
  };
}
