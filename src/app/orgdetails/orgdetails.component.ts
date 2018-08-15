import { Component, OnInit } from '@angular/core';
import { OrgInfoService } from '../services/orgInfo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orgdetails',
  templateUrl: './orgdetails.component.html',
  styleUrls: ['./orgdetails.component.css']
})
export class OrgdetailsComponent implements OnInit {
  editMode: boolean = false;
  displayFormAddImage: boolean = false;
  displayFormAddEvent: boolean = false;
  newImageURL: string = '';


  constructor(
    public orgInfo: OrgInfoService, 
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getOrg();
  }

  getOrg() {
    this.route.params.subscribe(params => {
      this.orgInfo.getOneOrg(params['id'])
      .subscribe();
    })
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  updateOrg(updateForm) {
    this.orgInfo.updateOrg(updateForm.value).subscribe();
    this.toggleEditMode();
  }

  addPhoto(event) {
    this.orgInfo.addPhoto(this.newImageURL).subscribe();
    this.newImageURL = '';
    this.toggleAddImageForm(event);
  }

  removePhoto(photo) {
    this.orgInfo.deletePhoto(photo).subscribe();
  }

  removeEvent(eventId) {
    this.orgInfo.deleteEvent(eventId).subscribe();
  }

  removeReview(reviewId) {
    this.orgInfo.deleteReview(reviewId).subscribe();
  }

  removeMember(member) {
    this.orgInfo.deleteMember(member).subscribe();
  }

  ignore(event) {
    event.stopPropagation();
  }

  toggleAddImageForm(event) {
    this.displayFormAddImage = !this.displayFormAddImage;
  }

  toggleAddEventForm(event) {
    this.displayFormAddEvent = !this.displayFormAddEvent;
  }
}
