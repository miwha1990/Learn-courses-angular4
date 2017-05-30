import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouPageComponent } from './thank-you-page.component';
import { RouterModule} from '@angular/router';
import { ThankYouPageRoutes } from './thank-you-page.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ThankYouPageRoutes),
  ],
  declarations: [ ThankYouPageComponent ],
  providers: []
})
export class ThankYouPageModule { }
