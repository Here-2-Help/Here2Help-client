import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FormsModule} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  currentUser: any;

  constructor(private http: Http) { }

  handleError(e) {
    console.log(e);
     return Observable.throw(e.json().message);
  }

  signup(newUser) {
    return this.http.post('http://localhost:3000/api/users/signup', newUser, {withCredentials: true})
    .map(res => res.json())
    // .catch(this.handleError);
  }

  logout() {
    return this.http.post('http://localhost:3000/api/users/logout', {})
    .map(res => {res.json()})

  getOneUser(userID) {
    return this.http.get(`http://localhost:3000/api/users/${userID}`)
      .map((userDetails)=>{
        return userDetails.json()
      });
    
// COMMENTING THIS OUT INSTEAD OF DELETING IT IN CASE WE NEED TO USE THIS SIGNUP METHOD INSTEAD OF MINE
//    signup(newUser){
//        return this.http.post('http://localhost:3000/api/users/signup', newUser)
//        .map(res => {this.currentUser = res.json().email ? res.json() : null; res.json()});
//    }
    
  }
}
