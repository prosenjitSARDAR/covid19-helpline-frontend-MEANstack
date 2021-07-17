import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  serviceCategory: Array<String> = ["oxygen", "hospital", "medicine", "test-lab", "kitchen", "ambulance"];

  constructor(
    public formBuilder: FormBuilder,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this.formBuilder.group({
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
      'remarks': ['']
    })
  }

  get signupFormValue() {
    return this.signupForm.value;
  }
  reset() {
    this.signupForm.reset();
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
