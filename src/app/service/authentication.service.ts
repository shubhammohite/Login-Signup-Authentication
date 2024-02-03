import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiUrl="http://localhost:3000/user";
  constructor(private httpclient:HttpClient) { }

  getData()
  {
    return this.httpclient.get(this.apiUrl);
  }
  getByteCodeData(userName:any)
  {
    return this.httpclient.get(this.apiUrl + '/' +userName);
  }
  signup(inputdata:any)
  {
    return this.httpclient.post(this.apiUrl,inputdata);
  }
  updateUser(code:any,inputdata:any)
  {
    return this.httpclient.put(this.apiUrl+'/'+code,inputdata);
  }
  IsloggedIn()
  {
    return sessionStorage.getItem('id')!=null;
  }
  GetUserRole()
  {
    return sessionStorage.getItem('userRole')!=null?sessionStorage.getItem('userRole')?.toString():'';
  }
}
