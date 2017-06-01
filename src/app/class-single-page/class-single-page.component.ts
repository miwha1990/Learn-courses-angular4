import { Component, OnInit, HostListener} from '@angular/core';
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
  data = null;
  errorMessage: string;
  upcomingCoursesData;
  constructor(private GetClassDataService: GetClassDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id: number = params['id'];
      this.GetClassDataService.getClassData(id)
          .subscribe(res => {
                this.data = res;
              },
              error =>  this.errorMessage = <any>error);
      this.GetClassDataService.getUpcomingCourses(id)
          .subscribe(res => {
                this.upcomingCoursesData = res;
              },
              error =>  this.errorMessage = <any>error);
    });
    $('#sticky-element').stick_in_parent({offset_top: 50});
    const desktopSticky = function(){
        $('app-sticky-card').stick_in_parent({offset_top: 90, parent: '.class-page-wrapper'})
            .on('sticky_kit:bottom', function(e) {
                $(this).parent().css('position', 'static');
                $('#sticky-element').removeClass('is_stuck');
            })
            .on('sticky_kit:unbottom', function(e) {
                $(this).parent().css('position', 'relative');
                $('#sticky-element').addClass('is_stuck');
            });
    };
    const mobileSticky = function(){
       $('app-sticky-card').trigger('sticky_kit:detach');
   };
    const isMobile = window.matchMedia('only screen and (max-width: 991px)');
    const stickySetUp = function(){
        if (isMobile.matches) {
            mobileSticky();
        } else {
            desktopSticky();
        }
    };
    stickySetUp();
    $(window).resize(
        function () {
            stickySetUp();
        }
    );
  }
}
