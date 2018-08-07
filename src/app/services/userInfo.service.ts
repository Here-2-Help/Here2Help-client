import { Injectable }     from '@angular/core';
import { Http,Response }  from '@angular/http';
import { FormsModule}     from '@angular/forms';
import { Router }         from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  key:String = 'AIzaSyBQmB4EGSCfePPlGmYGD-MUaLBsP49sP-Y';
  
  currentUser: any;

  constructor(
    private http: Http, 
    private router: Router
  ) { }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  signup(newUser) {
    return this.http.post('http://localhost:3000/api/users/signup', newUser, {withCredentials: true})
    .map(res => res.json());
  }

  logout() {
    return this.http.post('http://localhost:3000/api/users/logout', {}, {withCredentials: true})
    .subscribe(res => {this.router.navigate(['/'])});
  }

  login(user) {
    return this.http.post('http://localhost:3000/api/users/login', user, {withCredentials: true})
    .map(res => {this.currentUser = res.json().email ? res.json() : null; res.json()})
  }

  getOneUser(userID) {
    return this.http.get(`http://localhost:3000/api/users/${userID}`)
    .map((userDetails)=>{return userDetails.json()});
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/users/loggedin`, {withCredentials: true})
    .map(res => {this.currentUser = res.json().email ? res.json() : null; res.json()})
  }
    
// COMMENTING THIS OUT INSTEAD OF DELETING IT IN CASE WE NEED TO USE THIS SIGNUP METHOD INSTEAD OF MINE
//    signup(newUser){
//        return this.http.post('http://localhost:3000/api/users/signup', newUser)
//        .map(res => {this.currentUser = res.json().email ? res.json() : null; res.json()});
//    }
    
}
