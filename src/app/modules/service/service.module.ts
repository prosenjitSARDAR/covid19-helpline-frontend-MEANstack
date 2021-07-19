import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidTrackerService } from './all services/covid-tracker.service';
import { AuthService } from './all services/auth.service';
import { DataService } from './all services/data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CovidTrackerService, AuthService, DataService]
})
export class ServiceModule { }
