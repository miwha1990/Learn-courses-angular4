import { Component , ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements  AfterViewInit {
  constructor(private el: ElementRef) {

  }
  ngAfterViewInit() {}
}
