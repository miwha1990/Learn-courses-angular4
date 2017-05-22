import { Component, OnInit, ElementRef, Inject, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage-static-info',
  templateUrl: './homepage-static-info.component.html',
  styleUrls: ['./homepage-static-info.component.scss']
})
export class HomepageStaticInfoComponent implements OnInit {

  public subscribeForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])]
  });
  constructor(public fb: FormBuilder, @Inject(DOCUMENT) private document: Document) {}
  ngOnInit() {
  }
  formSubmit() {
    console.log(this.subscribeForm.value);
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.formSubmit();
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const position = this.document.body.scrollTop;
    if (position > (window.screen.height - 50)) {
     console.log('time to change header', window.screen.height - 50);
    } else {
      console.log('cutted header');
    }
  }
}
