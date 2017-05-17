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
  constructor(private GetClassDataService: GetClassDataService, private el: ElementRef) { }

  ngOnInit() {
    this.GetClassDataService.getClassData(1).subscribe(res => {this.data = res; console.log(res); }, error =>  this.errorMessage = <any>error);
  }
  @HostListener ('window:scroll', [])
  onWindowScroll() {
    this.checkForSticky();
  }
  checkForSticky = function(){
    if (document.body.scrollTop > this.el.nativeElement.children[0].offsetHeight + this.el.nativeElement.children[0].offsetTop - 50) { // 50px represents sticky header height
      this.stickyBannerFlag = true;
    } else {
      this.stickyBannerFlag = false;
    }
    return null;
  };
}
