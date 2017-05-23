import { Component, OnInit, HostListener, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() routerHome: boolean;
  @Input() homeScrolled: boolean;
  slidebarFlag = false;
  constructor(private el: ElementRef) { }

  ngOnInit() {}
  changeFlag(event) {
    event.stopPropagation();
    return this.slidebarFlag = !this.slidebarFlag;
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.slidebarFlag = false;
    }
  };
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if ((this.isDescendant(this.el.nativeElement.children[this.el.nativeElement.children.length - 1], event.target) === false) && this.slidebarFlag) {
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
