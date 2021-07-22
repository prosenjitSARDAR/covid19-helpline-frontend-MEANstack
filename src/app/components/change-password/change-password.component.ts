import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/modules/service/all services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passwordForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public _authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.createPasswordForm();
  }

  createPasswordForm() {
    this.passwordForm = this.formBuilder.group({
      'currentPassword': ['', [Validators.required, Validators.minLength(6)]],
      'newPassword': ['', [Validators.required, Validators.minLength(6)]],
      'confirmPassword': ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get passwordFormValue() {
    return this.passwordForm.value;
  }

  onSubmit() {
    if (this.passwordForm.invalid) {
      return false;
    }
    if (this.passwordForm.value.newPassword != this.passwordForm.value.confirmPassword) {
      this.toastr.error("'New password' & 'Confirm password' does not match", 'Stop!');
      return false;
    }

    let data: { currentPassword: String, newPassword: String, confirmPassword: String } = this.passwordFormValue;

    this._authService.changePassword(data).subscribe((res) => {
      if (res['success'] == true) {
        this.toastr.success(res['message'], 'Done!');
        this._authService.logout();
      }
    }, (error) => {
      this.toastr.error(error, 'Error! Something went wrong');
      this.passwordForm.reset();
    })

  }

  goBackToHome() {
    this.router.navigate(['/']);
  }

}
