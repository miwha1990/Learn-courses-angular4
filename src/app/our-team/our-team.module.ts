import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OurTeamRoutes } from './our-team.routing';

import { OurTeamComponent } from './our-team.component';
import { TeamItemComponent } from './team-item/team-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OurTeamRoutes)
  ],
  declarations: [
  	OurTeamComponent,
  	TeamItemComponent
  ]
})
export class OurTeamModule { }
