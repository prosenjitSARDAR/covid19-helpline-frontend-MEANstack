import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidTrackerService } from './all services/covid-tracker.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CovidTrackerService]
})
export class ServiceModule { }
