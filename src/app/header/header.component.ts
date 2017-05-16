import { Component, OnInit, HostListener, ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  slidebarFlag = false;
  stickyFlag = false;
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  changeFlag() {
    return this.slidebarFlag = !this.slidebarFlag;
  }
  @HostListener ('window:scroll', [])
  onWindowScroll() {
    this.checkForSticky();
  }
  checkForSticky = function(){
    if (document.body.scrollTop > this.el.nativeElement.children[0].offsetHeight + this.el.nativeElement.children[1].offsetHeight - 40) {
      this.stickyFlag = true;
    } else {
      this.stickyFlag = false;
    }
    return null;
  };
}
