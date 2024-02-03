import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{
  userName:any;
  ngOnInit():void{
  this.userName= sessionStorage.getItem('username')
}

}
