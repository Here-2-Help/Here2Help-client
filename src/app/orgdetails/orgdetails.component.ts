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


  constructor(
    public orgInfo: OrgInfoService, 
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getOrg();
  }

  // update() {
  //   this.orgInfo.getOneOrg(this.orgInfo.currentOrg._id).subscribe();
  // }

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

  removePhoto(photo) {
    this.orgInfo.deletePhoto(photo).subscribe();
  }

  removeEvent(eventId) {
    this.orgInfo.deleteEvent(eventId).subscribe();
  }

  removeReview(reviewId) {
    this.orgInfo.deleteReview(reviewId).subscribe(res => {console.log(res)});
  }

  removeMember(member) {
    this.orgInfo.deleteMember(member).subscribe();
  }
}
