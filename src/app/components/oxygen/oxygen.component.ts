import { Component, OnInit } from '@angular/core';
import { ResourceDetails } from './../../data_models/resource.model';
import { DataService } from './../../modules/service/all services/data.service';

@Component({
  selector: 'app-oxygen',
  templateUrl: './oxygen.component.html',
  styleUrls: ['./oxygen.component.css']
})
export class OxygenComponent implements OnInit {

  private category: string = "oxygen";
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
