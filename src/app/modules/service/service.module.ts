import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidTrackerService } from './all services/covid-tracker.service';
import { AuthService } from './all services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CovidTrackerService, AuthService]
})
export class ServiceModule { }
