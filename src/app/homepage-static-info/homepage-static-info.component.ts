import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {GetDataService } from '../services/get-data.service';
import {Observable} from 'rxjs/Observable';

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
    email: ['', Validators.required, Validators.email]
  });
  constructor(public fb: FormBuilder, private GetDataService: GetDataService) {}
  ngOnInit() {
    this.getData();
  }
  formSubmit() {
  }
  getData() {
    this.GetDataService.getData().subscribe(res => {this.data = res; }, error =>  this.errorMessage = <any>error);
  }

}
