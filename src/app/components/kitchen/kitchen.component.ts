import { Component, OnInit } from '@angular/core';
import { ResourceDetails } from 'src/app/data_models/resource.model';
import { DataService } from 'src/app/modules/service/all services/data.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  private category: string = "kitchen";
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
