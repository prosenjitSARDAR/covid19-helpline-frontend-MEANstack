import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
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
  noResource: boolean = false;

  constructor(private _dataService: DataService, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.spinner.show();
    this._dataService.getResources(this.category).subscribe((res) => {
      if (res['success'] == true) {
        this.resources = res['resources'];
        if (!this.resources || this.resources.length == 0) {
          this.noResource = true;
        }
      }
      this.spinner.hide();
    }, (error) => {
      this.spinner.hide();
      this.toastr.error(error, 'Error!');
    })
  }

}
