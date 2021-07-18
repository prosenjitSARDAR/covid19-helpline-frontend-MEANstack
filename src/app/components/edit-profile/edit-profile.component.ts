import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/modules/service/all services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profileForm: FormGroup;
  serviceCategory: Array<String> = ["oxygen", "hospital", "medicine", "test-lab", "kitchen", "ambulance"];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public _authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.createProfileForm();
  }

  createProfileForm() {
    this.profileForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(3)]],
      'email': ['', [Validators.required, Validators.email, Validators.maxLength(35), Validators.minLength(4)]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
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

  onSubmit() {

  }

  goBackToHome() {
    this.router.navigate(['/']);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }

}
