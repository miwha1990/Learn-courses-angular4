import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  slidebarFlag = false;
  constructor() { }

  ngOnInit() {
  }
  changeFlag() {
    return this.slidebarFlag = !this.slidebarFlag;
  }
}
