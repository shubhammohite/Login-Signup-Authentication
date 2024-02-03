import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrl: './userlisting.component.css'
})
export class UserlistingComponent implements OnInit {
  userName:any;
  ngOnInit():void{
  this.userName= sessionStorage.getItem('username')
  }
}
