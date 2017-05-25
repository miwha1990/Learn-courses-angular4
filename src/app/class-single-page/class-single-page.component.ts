import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {GetClassDataService} from './get-class-data.service';
import {jQueryStatic} from 'jquery';
import 'jquery';
declare const $: jQueryStatic;

@Component({
  selector: 'app-class-single-page',
  templateUrl: './class-single-page.component.html',
  styleUrls: ['./class-single-page.component.scss']
})
export class ClassSinglePageComponent implements OnInit {
  data = {};
  errorMessage: string;
  constructor(private GetClassDataService: GetClassDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id: number = params['id'];
      this.GetClassDataService.getClassData(id)
          .subscribe(res => {
                this.data = res;
              },
              error =>  this.errorMessage = <any>error);
    });
    $('#sticky-element').stick_in_parent({offset_top: 50});
    $('app-sticky-card').stick_in_parent({offset_top: 90})
        .on('sticky_kit:bottom', function(e) {
          $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
          $(this).parent().css('position', 'relative');
        });
  }
}
