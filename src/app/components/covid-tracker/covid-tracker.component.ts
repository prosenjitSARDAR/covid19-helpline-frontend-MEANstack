import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovidTrackerService } from './../../modules/service/all services/covid-tracker.service';

@Component({
  selector: 'app-covid-tracker',
  templateUrl: './covid-tracker.component.html',
  styleUrls: ['./covid-tracker.component.css']
})
export class CovidTrackerComponent implements OnInit {

  route: string;
  covidData: any = {};

  constructor(private _covidTrackerService: CovidTrackerService, private router: Router) {  }

  ngOnInit(): void {
    this.getDailyCovidData();

  }

  getDailyCovidData() {
    this._covidTrackerService.getDailyCovidData().subscribe((res) => {
      if (res['success'] == true) {
        this.covidData = res['data'][0];
      }
    }, (error) => {
      console.log(error)
    })
  }



}
