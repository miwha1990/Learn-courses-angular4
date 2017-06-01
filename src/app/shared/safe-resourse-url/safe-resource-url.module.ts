import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SafeResourceUrlPipe} from './safe-resource-url.pipe';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SafeResourceUrlPipe],
  exports: [SafeResourceUrlPipe]
})
export class SafeResourceUrlModule { }
