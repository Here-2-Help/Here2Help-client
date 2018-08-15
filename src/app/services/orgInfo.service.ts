import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class OrgInfoService {
  currentOrg: any;

  constructor(
    public http: Http,
    public router: Router
  ) { }

  

  getOneOrg(orgId) {
    return this.http.get(`${environment.api_base}/api/orgs/${orgId}`)
    .map(res => {this.currentOrg = res.json().name ? res.json() : null; return res.json()});
  }

  updateOrg(updatedOrg) {
    return this.http.post(`${environment.api_base}/api/orgs/${this.currentOrg._id}/edit`, updatedOrg)
    .map(res => {return res.json()});
  }

  addPhoto(photoURL) {
    return this.http.post(`${environment.api_base}/api/orgs/${this.currentOrg._id}/addPhoto`, {photo: photoURL})
    .map(res => {this.getOneOrg(this.currentOrg._id).subscribe(); return res.json()});
  }

  deletePhoto(photo) {
    return this.http.post(`${environment.api_base}/api/orgs/${this.currentOrg._id}/deletePhoto`, {photo: photo})
    .map(res => {this.getOneOrg(this.currentOrg._id).subscribe(); return res.json()});
  }

  deleteEvent(eventId) {
    return this.http.post(`${environment.api_base}/api/events/${eventId}/delete`, {})
    .map(res => {this.getOneOrg(this.currentOrg._id).subscribe(); return res.json()});
  }

  deleteReview(reviewId) {
    return this.http.post(`${environment.api_base}/api/reviews/delete/${reviewId}`, {})
    .map(res => {this.getOneOrg(this.currentOrg._id).subscribe(); return res.json()});
  }

  deleteMember(member) {
    return this.http.post(`${environment.api_base}/api/orgs/${this.currentOrg._id}/deleteStaff`, member)
    .map(res => {this.getOneOrg(this.currentOrg._id).subscribe(); return res.json()});
  }
}
