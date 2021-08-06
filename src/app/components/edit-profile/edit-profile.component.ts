import { ProviderAndResourceDetails } from './../../data_models/providerAndResource.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from './../../modules/service/all services/data.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profileForm: FormGroup;
  serviceCategory: Array<String> = ["oxygen", "hospital", "medicine", "test-lab", "kitchen", "ambulance"];
  profileDetails: ProviderAndResourceDetails;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public _dataService: DataService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.createProfileForm();
    this.getProfileDetails();
  }

  createProfileForm() {
    this.profileForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(3)]],
      'email': ['', [Validators.required, Validators.email, Validators.maxLength(35), Validators.minLength(4)]],
      'resourceName': ['', [Validators.required, Validators.minLength(3)]],
      'category': ['', [Validators.required, Validators.minLength(3)]],
      'address': ['', [Validators.required, Validators.minLength(3)]],
      'city': ['', [Validators.required, Validators.minLength(3)]],
      'pincode': ['', [Validators.required, Validators.minLength(5)]],
      'contact_number': ['', [Validators.required, Validators.minLength(10)]],
      'availibility': ['', [Validators.required]],
      'remarks': [null]
    })
  }

  get profileFormValue() {
    return this.profileForm.value;
  }
  reset() {
    this.profileForm.reset();
  }

  getProfileDetails() {
    this._dataService.getProfileDetails().subscribe((res) => {
      if (res['success'] == true) {
        this.profileDetails = res['data'];
        this.setProfileForm(this.profileDetails);
      } else {
        this.toastr.error('Please try again later', "Error!")
      }
    }, (error) => {
      this.toastr.error(error, 'Error!');
    })
  }

  setProfileForm(data) {
    this.profileForm.patchValue({
      name: data['name'],
      email: data['email'],
      resourceName: data['resourceName'],
      category: data['category'],
      address: data['address'],
      city: data['city'],
      pincode: data['pincode'],
      contact_number: data['contact_number'],
      availibility: data['availibility'],
      remarks: data['remarks']
    })
  }

  onSubmit() {
    if (!this.profileForm.valid || !this.profileForm.dirty) {
      return false;
    }

    let Details: ProviderAndResourceDetails = this.profileForm.value;

    this._dataService.updateProfileDetails(Details).subscribe((res) => {
      if (res['success'] == true) {
        this.reset();
        this.setProfileForm(res['data']);
        this.toastr.success(res['message'], 'Success!');
      }
    }, (error) => {
      this.toastr.error(error, 'Error!');
    })
  }

  goBackToHome() {
    this.router.navigate(['/']);
  }

}
