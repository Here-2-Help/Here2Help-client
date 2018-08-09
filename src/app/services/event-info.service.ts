import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventInfoService {
  currentEvent: any;

  constructor(
    public http: Http,
    public router: Router
  ) { }

  getOneEvent(eventId) {
    return this.http.get(`${environment.api_base}/api/events/${eventId}`)
    .map(res => {this.currentEvent = res.json().name ? res.json() : null; console.log(res.json()); return res.json()})
  }
}
