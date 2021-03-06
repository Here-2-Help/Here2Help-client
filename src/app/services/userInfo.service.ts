import { Injectable }     from '@angular/core';
import { Http,Response }  from '@angular/http';
import { FormsModule}     from '@angular/forms';
import { Router }         from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import { environment }    from '../../environments/environment'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  // key:String = 'AIzaSyBQmB4EGSCfePPlGmYGD-MUaLBsP49sP-Y';
  
  currentUser: any;

  constructor(
    private http: Http, 
    private router: Router
  ) { }

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
    return this.http.post(`${environment.api_base}/api/users/signup`, newUser, {withCredentials: true})
    .map(res => {this.currentUser = res.json().email ? res.json() : null; res.json()});
  }

  logout() {
    return this.http.post(`${environment.api_base}/api/users/logout`, {}, {withCredentials: true})
    .map(res => {this.currentUser = res.json().email ? res.json() : null; res.json()})
  }

  login(user) {
    return this.http.post(`${environment.api_base}/api/users/login`, user, {withCredentials: true})
    // .map(res => {this.currentUser = JSON.parse(res._body)})
    .map(res => {this.currentUser = res.json().email ? res.json() : null; res.json()})
  }

  getOneUser(userID) {
    return this.http.get(`${environment.api_base}/api/users/${userID}`)
    .map((userDetails)=>{return userDetails.json()});
  }

  isLoggedIn() {
    return this.http.get(`${environment.api_base}/api/users/loggedin`, {withCredentials: true})
    .map(res => {
      // console.log(JSON.parse(res._body));
      // return this.currentUser = JSON.parse(res._body);
      this.currentUser = res.json().email ? res.json() : null; res.json()
    }
    )
  }

  editUser(userID,editedInfo){
    return this.http.post(`${environment.api_base}/api/users/edit/${userID}`, editedInfo, {withCredentials: true})
    .map(res => res.json());
  }

  deleteAccount(userID){
    return this.http.post(`${environment.api_base}/api/users/delete/${userID}`, {withCredentials: true})
    .map(res => res.json());
  }
    
// COMMENTING THIS OUT INSTEAD OF DELETING IT IN CASE WE NEED TO USE THIS SIGNUP METHOD INSTEAD OF MINE
//    signup(newUser){
//        return this.http.post('${environment.api_base}/api/users/signup', newUser)
//        .map(res => {this.currentUser = res.json().email ? res.json() : null; res.json()});
//    }
    
}
