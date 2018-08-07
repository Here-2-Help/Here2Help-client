import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrgInfoService {
  currentOrg: any;

  constructor(
    private http: Http,
    private router: Router
  ) { }

  getOneOrg(orgId) {
    return this.http.get(`http://localhost:3000/api/orgs/${orgId}`)
    .map(res => {this.currentOrg = res.json().name ? res.json() : null; return res.json()});
  }
}
