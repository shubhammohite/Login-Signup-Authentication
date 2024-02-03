import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Login_Signup_Authentication';
  isadmin=false;
  isMenuVisible=false;
  constructor(private route:Router){
    let role=sessionStorage.getItem('role');
    if(role=='admin'){
      this.isadmin=true;
    }
  }
  // ngDoCheck(): void {
  //   let currentroute = this.route.url;
  //   let role=sessionStorage.getItem('role');
  //   if (currentroute == '/login' || currentroute == '/register') {
  //     this.isMenuVisible = false
  //   } else {
  //     this.isMenuVisible = true
  //   }

  //   if (role == 'admin') {
  //     this.isadmin = true;
  //   }else{
  //     this.isadmin = false;
  //   }
  // }
}
