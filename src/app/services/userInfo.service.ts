import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: Http) { }

  signup(newUser) {
    return this.http.post('http://localhost:3000/api/users/signup', newUser)
    .map(res => res.json());
  }
}
