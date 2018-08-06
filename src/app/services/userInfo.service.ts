import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FormsModule} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  
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
}
