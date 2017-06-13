import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GetClassDataService } from './get-class-data.service';
import { jQueryStatic } from 'jquery';
import 'jquery';
declare const $: jQueryStatic;
import { SafeResourceUrlPipe } from '../shared/safe-resourse-url/safe-resource-url.pipe';
import { GoogleMapsService } from 'google-maps-angular2/dist/src/app/google-maps.service';
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
  video_id = null;
  loading = true;
  private map: any;
  @ViewChild('mapElement') mapElement: ElementRef;
  constructor(private GetClassDataService: GetClassDataService, private activatedRoute: ActivatedRoute, private pipe: SafeResourceUrlPipe, private gapi: GoogleMapsService ) {}
  ngOnInit() {
     // console.log(this.loading);
    const checkVideoSource = function(data){
        let videoSource;
        if ( data.video_id.indexOf('wistia') !== -1 ) { videoSource = 'wistia'; }
        if ( data.video_id.indexOf('youtube') !== -1 ) { videoSource = 'youtube'; }
        if ( data.video_id.indexOf('vimeo') !== -1 ) { videoSource = 'vimeo'; }
        return videoSource;
    };
    this.activatedRoute.params.subscribe((params: Params) => {
      const id: number = params['id'];
      this.GetClassDataService.getClassData(id)
          .subscribe(res => {
                this.data = res;
                this.videoSource = checkVideoSource(this.data);
                this.data.video_id = 'avk9twrrbn';
                // this.data.video_id = this.pipe.transform(this.data.video_id);
                // console.log(this.videoSource);
                // console.log(this.loading);
                // this.videoSource  = 'youtube';
                // this.data.video_id ='https://www.youtube.com/embed/aAdioIs17LM';
              this.loadMap();
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
  loadMap = function(){
      this.gapi.init.then(maps => {
          const loc = new maps.LatLng(this.data.venue.latitude, this.data.venue.longitude);

          this.map = new maps.Map(this.mapElement.nativeElement, {
              zoom: 16,
              center: loc,
              scrollwheel: false,
              panControl: false,
              mapTypeControl: false,
              zoomControl: true,
              streetViewControl: false,
              scaleControl: true,
              zoomControlOptions: {
                  style: maps.ZoomControlStyle.LARGE,
                  position: maps.ControlPosition.RIGHT_BOTTOM
              }
          });
          const icon = new maps.Marker({
              // url: 'http://maps.google.com/mapfiles/marker.png',
              url: '../../assets/pin.png',
              labelOrigin: new maps.Point(95, 43),
              scaledSize: new maps.Size(43, 50)
          });
          const markerText = this.data.venue.address.address_1 + (this.data.venue.address.address_2 ? (' ' + this.data.venue.address.address_2) : '');
          const marker = new maps.Marker({
              position: {lat: this.data.venue.latitude, lng: this.data.venue.longitude},
              map: this.map,
              icon: icon,
              label: { text: markerText, fontWeight: '600', color: '#830004'}
          });
      });
  };
  onLoad = function(){
      if (this.data !== null) {
          this.loading = false;
          // console.log('my time');
      }
  };
}
