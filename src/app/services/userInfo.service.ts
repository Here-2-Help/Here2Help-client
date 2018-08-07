import { Injectable }           from '@angular/core';
import { Http,Response }        from '@angular/http';
import { Observable }           from 'rxjs/Observable';
import { FormsModule}           from '@angular/forms';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  // key:String = 'AIzaSyBQmB4EGSCfePPlGmYGD-MUaLBsP49sP-Y';
  
  currentUser: any;

  constructor(private http: Http) { }

  handleError(e) {
    console.log(e);
     return Observable.throw(e.json().message);
  }

  pullCityFromZip(zipCode){
    return this.http.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&sensor=true`,{})
      .subscribe((googleCity)=>{
          return googleCity.json();
      })
  }

  signup(newUser) {
    return this.http.post('http://localhost:3000/api/users/signup', newUser, {withCredentials: true})
    .map(res => res.json())
    // .catch(this.handleError);
  }

  logout() {
    return this.http.post('http://localhost:3000/api/users/logout', {})
    .map(res => {res.json()})
  }

  login(user) {
    return this.http.post('http://localhost:3000/api/users/login', user)
    .map(res => {this.currentUser = res.json().email ? res.json() : null; res.json()});
  }

  getOneUser(userID) {
    return this.http.get(`http://localhost:3000/api/users/${userID}`)
      .map((userDetails)=>{
        return userDetails.json()
      });
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/user/loggedin`, {withCredentials: true})
      .map((res) => {
        return JSON.parse(res._body)
      })
      .catch(this.handleError);
  }
    
// COMMENTING THIS OUT INSTEAD OF DELETING IT IN CASE WE NEED TO USE THIS SIGNUP METHOD INSTEAD OF MINE
//    signup(newUser){
//        return this.http.post('http://localhost:3000/api/users/signup', newUser)
//        .map(res => {this.currentUser = res.json().email ? res.json() : null; res.json()});
//    }
    
}
