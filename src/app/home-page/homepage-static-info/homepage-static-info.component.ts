import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {GetDataService } from '../get-data.service';

@Component({
  selector: 'app-homepage-static-info',
  templateUrl: './homepage-static-info.component.html',
  styleUrls: ['./homepage-static-info.component.scss']
})
export class HomepageStaticInfoComponent implements OnInit {

  data = {};
  errorMessage: string;
  public subscribeForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])]
  });
  constructor(public fb: FormBuilder, private GetDataService: GetDataService) {}
  ngOnInit() {
    this.getData();
  }
  formSubmit() {
    console.log(this.subscribeForm.value);
  }
  getData() {
    this.GetDataService.getData().subscribe(res => {this.data = res; }, error =>  this.errorMessage = <any>error);
  }

}
