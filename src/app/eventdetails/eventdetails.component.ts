import { Component, OnInit } from '@angular/core';
import { EventInfoService } from '../services/event-info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {

  constructor(
    public eventInfo: EventInfoService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    this.route.params.subscribe(params => {
      this.eventInfo.getOneEvent(params['id'])
      .subscribe();
    });
  }

}
