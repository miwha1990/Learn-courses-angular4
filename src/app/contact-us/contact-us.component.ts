import { AfterViewInit, ElementRef, Component, ViewChild } from '@angular/core';
import { GoogleMapsService } from 'google-maps-angular2/dist/src/app/google-maps.service';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements AfterViewInit {
  @ViewChild('mapElement') mapElement: ElementRef;

  private map: any;

  constructor(private gapi: GoogleMapsService) {
  }

  ngAfterViewInit(): void {
    this.gapi.init.then(maps => {
      const loc = new maps.LatLng(43.6560627, -79.3571312);

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
      const marker = new maps.Marker({
        position: {lat: 43.6560627, lng: -79.3571312},
        map: this.map,
        icon: icon,
        label: { text: '573 King Street East', fontWeight: '600', color: '#830004'}
      });
      });
  }
}
