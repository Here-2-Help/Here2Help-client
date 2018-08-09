import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import { OrgInfoService } from '../services/orgInfo.service';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor(
    public dialog:      MatDialog,
    public orgService:  OrgInfoService
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddReviewComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // submitReview(reviewContent){

  // }

  ngOnInit() {
  }

}