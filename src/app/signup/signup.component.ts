import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private fb:FormBuilder,private toastr:ToastrService,private authentication:AuthenticationService,private router:Router) { }

  signupform=this.fb.group({
    id:this.fb.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    userPassword:this.fb.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    userEmail:this.fb.control('',Validators.compose([Validators.required,Validators.email])),
    userGender:this.fb.control('',Validators.compose([Validators.required])),
    userMobileNo:this.fb.control('',Validators.compose([Validators.required,Validators.pattern('^[- +()0-9]{10,15}$')])),
    UserRole:this.fb.control(''),
    isActive:this.fb.control('false'),
  });

  signup()
  {
    if(this.signupform.valid)
    {
this.authentication.signup(this.signupform.value).subscribe(res => {
this.toastr.success("Register Successfully , Please wait for admin approval your account");
this.router.navigate(['login']);
})
    }
    else
   {
this.toastr.warning("Please enter the correct data as per form required");
   }
  }

}
