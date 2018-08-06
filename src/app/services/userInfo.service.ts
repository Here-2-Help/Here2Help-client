import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  currentUser: any;

  constructor(private http: Http) { }

  signup(newUser) {
    return this.http.post('http://localhost:3000/api/users/signup', newUser)
    .map(res => {this.currentUser = res.json().email ? res.json() : null; res.json()});
  }

  login(user) {
    return this.http.post('http://localhost:3000/api/users/login', user)
    .map(res => {this.currentUser = res.json().email ? res.json() : null; res.json()});
  }

  logout() {
    return this.http.post('http://localhost:3000/api/users/logout', {})
    .map(res => {res.json()})
  }
}
