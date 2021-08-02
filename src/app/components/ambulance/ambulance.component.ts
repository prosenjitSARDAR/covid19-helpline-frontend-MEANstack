import { Component, OnInit } from '@angular/core';
import { ResourceDetails } from 'src/app/data_models/resource.model';
import { DataService } from 'src/app/modules/service/all services/data.service';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent implements OnInit {

  private category: string = "ambulance";
  resources: ResourceDetails[];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getResources(this.category).subscribe((res) => {
      if (res['success'] == true) {
        this.resources = res['resources'];
      }
    }, (error) => {
      console.log(error);
    })
  }
}
