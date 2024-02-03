import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authentication: AuthenticationService,
    private router: Router
  ) {}
  userdata: any;
  Loginform = this.fb.group({
    id: this.fb.control('', Validators.compose([Validators.required])),
    userPassword: this.fb.control(
      '',
      Validators.compose([Validators.required])
    ),
  });

  Login() {
    if (this.Loginform.valid) {
      this.authentication
        .getByteCodeData(this.Loginform.value.id)
        .subscribe((res) => {
          this.userdata = res;
        if (this.userdata.userPassword === this.Loginform.value.userPassword) {
          if (this.userdata.isActive) {
            sessionStorage.setItem('username',this.userdata.id);
            sessionStorage.setItem('role',this.userdata.role);
            this.toastr.success("Login Successfully")
            this.router.navigate(['dashboard']);

          } else {
            this.toastr.error('InActive User');
          }
        } else {
          this.toastr.error('Invalid credentials');
        }
      });
    } else {
      this.toastr.warning('Please Enter valid data.')
    }
    }
  }

