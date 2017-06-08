import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {GetClassDataService} from './get-class-data.service';
import {jQueryStatic} from 'jquery';
import 'jquery';
declare const $: jQueryStatic;
import { SafeResourceUrlPipe } from '../shared/safe-resourse-url/safe-resource-url.pipe';
@Component({
  selector: 'app-class-single-page',
  templateUrl: './class-single-page.component.html',
  styleUrls: ['./class-single-page.component.scss']
})
export class ClassSinglePageComponent implements OnInit {
  data = null;
  errorMessage: string;
  upcomingCoursesData;
  videoSource = null;
  video_url = null;
  loading = true;
  constructor(private GetClassDataService: GetClassDataService, private activatedRoute: ActivatedRoute, private pipe: SafeResourceUrlPipe ) {}
  ngOnInit() {
     // console.log(this.loading);
    const checkVideoSource = function(data){
        let videoSource;
        if ( data.video_url.indexOf('wistia') !== -1 ) { videoSource = 'wistia'; }
        if ( data.video_url.indexOf('youtube') !== -1 ) { videoSource = 'youtube'; }
        if ( data.video_url.indexOf('vimeo') !== -1 ) { videoSource = 'vimeo'; }
        return videoSource;
    };
    this.activatedRoute.params.subscribe((params: Params) => {
      const id: number = params['id'];
      this.GetClassDataService.getClassData(id)
          .subscribe(res => {
                this.data = res;
                this.videoSource = checkVideoSource(this.data);
                this.data.video_url = this.pipe.transform(this.data.video_url);
                // console.log(this.videoSource);
                // console.log(this.loading);
                // this.videoSource  = 'youtube';
                // this.data.video_url ='https://www.youtube.com/embed/aAdioIs17LM';
              },
              error =>  this.errorMessage = <any>error);
              // () => this.loading = false);
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
  onLoad = function(){
      if (this.data !== null) {
          this.loading = false;
          // console.log('my time');
      }
  };
}
