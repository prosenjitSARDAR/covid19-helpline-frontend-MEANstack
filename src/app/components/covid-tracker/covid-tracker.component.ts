import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CovidTrackerService } from './../../modules/service/all services/covid-tracker.service';

@Component({
  selector: 'app-covid-tracker',
  templateUrl: './covid-tracker.component.html',
  styleUrls: ['./covid-tracker.component.css']
})
export class CovidTrackerComponent implements OnInit {

  hiddenMode: Boolean = false;
  routeUrl: string;
  covidData: any = {};

  constructor(private _covidTrackerService: CovidTrackerService, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.routeUrl = event.url;
        if (this.routeUrl == '/change-password' || this.routeUrl == '/edit-profile' || this.routeUrl == '/signup' || this.routeUrl == '/login') {
          this.hiddenMode = true;
        } else {
          this.hiddenMode = false;
        }
      }
    })
  }

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
