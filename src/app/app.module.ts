import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import {GetDataService} from './services/get-data.service';
import { HeaderComponent } from './header/header.component';
import { HomepageStaticInfoComponent } from './homepage-static-info/homepage-static-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    HomepageStaticInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
