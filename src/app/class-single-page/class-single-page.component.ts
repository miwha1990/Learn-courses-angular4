import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {GetClassDataService} from './get-class-data.service';

@Component({
  selector: 'app-class-single-page',
  templateUrl: './class-single-page.component.html',
  styleUrls: ['./class-single-page.component.scss']
})
export class ClassSinglePageComponent implements OnInit {
  data = {};
  errorMessage: string;
  stickyBannerFlag = false;
  position: number;
  scroll: number;
  constructor(private GetClassDataService: GetClassDataService, private elem: ElementRef) { }

  ngOnInit() {
    console.log('init');
    this.GetClassDataService.getClassData(1).subscribe(res => {this.data = res; }, error =>  this.errorMessage = <any>error);
    this.position = document.body.scrollTop;
    }
  @HostListener ('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.checkForBannerSticky(event);
  }
  checkForBannerSticky = function(event) {
    this.scroll = document.body.scrollTop;
    if (this.scroll >= this.position) { // scroll down
      console.log('i go down');
      if (document.body.scrollTop >= this.elem.nativeElement.children[0].offsetHeight + this.elem.nativeElement.children[0].offsetTop - 50) {
        if (!this.stickyBannerFlag) {
          this.stickyBannerFlag = true;
        }
      }
    } else { // scroll up
      console.log('i go up');
      if (document.body.scrollTop < this.elem.nativeElement.children[0].offsetHeight + this.elem.nativeElement.children[0].offsetTop - 50) {
        if (this.stickyBannerFlag) {
          this.stickyBannerFlag = false;
        }
      }
    }
    this.position = this.scroll;
  };
}
