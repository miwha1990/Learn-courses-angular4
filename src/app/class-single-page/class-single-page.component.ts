import {Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GetClassDataService } from './get-class-data.service';
import { jQueryStatic } from 'jquery';
import 'jquery';
declare const $: jQueryStatic;

import { GoogleMapsService } from 'google-maps-angular2/dist/src/app/google-maps.service';
@Component({
  selector: 'app-class-single-page',
  templateUrl: './class-single-page.component.html',
  styleUrls: ['./class-single-page.component.scss']
})
export class ClassSinglePageComponent implements OnInit {
    private data = null;
    private errorMessage: string;
    private upcomingCoursesData;
    private loading = true;
    private map: any;
    private isMobile = window.matchMedia('only screen and (max-width: 991px)');
    @ViewChild('mapElement') mapElement: ElementRef;
    @ViewChild('preloader') preloader: ElementRef;
    constructor(private GetClassDataService: GetClassDataService,
                private activatedRoute: ActivatedRoute,
                private gapi: GoogleMapsService,
                private renderer2: Renderer2) {
    }

    ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id: number = params['id'];
      this.GetClassDataService.getClassData(id)
          .subscribe(res => {
                this.data = res;
                this.loadMap();
                $('#sticky-element').stick_in_parent({offset_top: 50});
                this.stickySetUp();
                setTimeout(() => {
                  if (this.preloader) {
                      this.renderer2.addClass(this.preloader.nativeElement, 'fadeOut');
                  }
                  setTimeout(() => {
                      this.loading = false;
                  }, 200);
                } , 5000);
              },
              error =>  this.errorMessage = <any>error);
      this.GetClassDataService.getUpcomingCourses(id)
          .subscribe(res => {
                this.upcomingCoursesData = res;
              },
              error =>  this.errorMessage = <any>error);
    });
        $(window).resize(
            function () {
                this.stickySetUp();
            }
        );
    }
    desktopSticky = function(){
        $('app-sticky-card').stick_in_parent({offset_top: 90, parent: '.class-page-wrapper'})
            .on('sticky_kit:bottom', function(e) {
                $(this).parent().css('position', 'static');
                $('#sticky-element').removeClass('is_stuck');
            })
            .on('sticky_kit:unbottom', function(e) {
                if ($('body').offset().top !== 0) {
                    $(this).parent().css('position', 'relative');
                    $('#sticky-element').addClass('is_stuck');
                }
            });
    };
    mobileSticky = function(){
        $('app-sticky-card').trigger('sticky_kit:detach');
    };
    stickySetUp = function(){
        if (this.isMobile.matches) {
            this.mobileSticky();
        } else {
            this.desktopSticky();
        }
    };
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
}
