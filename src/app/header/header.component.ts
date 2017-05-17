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
  changeFlag(event) {
    event.stopPropagation();
    return this.slidebarFlag = !this.slidebarFlag;
  }
  @HostListener ('document:scroll', [])
  onDocumentScroll() {
    this.checkForSticky();
  }
  checkForSticky = function(){
    if (document.body.scrollTop >= this.el.nativeElement.children[0].offsetHeight + this.el.nativeElement.children[1].offsetHeight - 40) { // 40px represents margin-bottom of header
      if (!this.stickyFlag) {
        this.stickyFlag = true;
      }
    } else {
      if (this.stickyFlag) {
        this.stickyFlag = false;
      }
    }
    return null;
  };
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.slidebarFlag = false;
    }
  };
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if ((this.isDescendant(this.el.nativeElement.children[2], event.target) === false) && this.slidebarFlag) {
      this.slidebarFlag = false;
    }
  }
  isDescendant(parent, child) {
    let node = child;
    while (node !== null) {
      if (node === parent) {
        return true;
      } else {
        node = node.parentNode;
      }
    }
    return false;
  }
}
