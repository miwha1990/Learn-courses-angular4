import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.component.html',
  styleUrls: ['./upcoming-courses.component.scss']
})
export class UpcomingCoursesComponent implements  OnChanges {
  @Input() upcomingCoursesData;
  @Input() additionalInfo: boolean = false;
  @Input() textMessage: string;
  cardContentEarly: string;
  cardContentRegular: string;
  ngOnChanges() {
    if (this.upcomingCoursesData != null) {
// this.data.partner_url = 'https://stretchtowin.site-ym.com/events/register.aspx?id=909951&itemid=cf22259c-ca1d-41f4-9f2e-a769417b1680';
      if ( this.upcomingCoursesData.partner_url != null ) {
        if ( this.upcomingCoursesData.partner_soldout ) {
          this.cardContentRegular = this.cardContentEarly = 'Sold Out';
        }
      } else {
        if ( this.upcomingCoursesData.spots_early > 0 ) {
          this.cardContentEarly = this.upcomingCoursesData.spots_early + ' spots left';
        } else {
          this.cardContentEarly = 'Sold Out';
        }
        if ( this.upcomingCoursesData.spots_regular > 0 ) {
          this.cardContentRegular = this.upcomingCoursesData.spots_regular + ' spots left';
        } else {
          this.cardContentRegular = 'Sold Out';
        }
      }
    }
  }
}
