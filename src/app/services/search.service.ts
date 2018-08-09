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
export class SearchService {

  allUsers:any    = {};
  allOrgs:any     = {};
  allEvents:any   = {};

  constructor(
    public http: Http, 
    public router: Router
  ) { }

  // pullAllUsers(){
  //   return this.http.get(`${environment.api_base}/api/users/`)
  //   .map(returnedUsers =>   {return returnedUsers.json()});
  // }

  pullAllUsers(){
    return this.http.get(`${environment.api_base}/api/users/`)
    .map(returnedUsers =>   {return returnedUsers.json()});
  }

  pullAllOrgs(){
    return this.http.get(`${environment.api_base}/api/orgs/`)
    .map(returnedOrgs =>    {return returnedOrgs.json()});
  }

  pullAllEvents(){
    return this.http.get(`${environment.api_base}/api/events/`)
    .map(returnedEvents =>  {return returnedEvents.json()});
  }

}
