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
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
      this.slidebarFlag = false;
    }
}
