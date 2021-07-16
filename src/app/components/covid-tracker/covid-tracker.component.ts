import { Component, OnInit } from '@angular/core';
import { CovidTrackerService } from './../../modules/service/all services/covid-tracker.service';

@Component({
  selector: 'app-covid-tracker',
  templateUrl: './covid-tracker.component.html',
  styleUrls: ['./covid-tracker.component.css']
})
export class CovidTrackerComponent implements OnInit {

  covidData: any = {};

  constructor(private _covidTrackerService: CovidTrackerService) { }

  ngOnInit(): void {
    this.getDailyCovidData();

  }

  getDailyCovidData() {
    this._covidTrackerService.getDailyCovidData().subscribe((res) => {
      if(res['success'] == true) {
        this.covidData = res['data'][0];
      }
    }, (error) => {
      console.log(error)
    })
  }



}
