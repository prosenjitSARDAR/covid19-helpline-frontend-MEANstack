import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/modules/service/all services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public _authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email, Validators.maxLength(35), Validators.minLength(4)]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get loginFormValue() {
    return this.loginForm.value;
  }
  reset() {
    this.loginForm.reset();
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return false;
    }

    let credential: { email: String, password: String } = this.loginFormValue;

    this._authService.login(credential).subscribe((res) => {
      if (res['success'] == true) {
        localStorage.setItem('token', res['token']);
        this.reset();
        this.toastr.success("Welcome", 'Done!');
        this.goBackToHome();
      }
    }, (error) => {
      this.toastr.error(error, 'Error! Something went wrong');
    })

  }

  goBackToHome() {
    this.router.navigate(['/']);
  }
  goToSignUp() {
    this.router.navigate(['/signup']);
  }

}
