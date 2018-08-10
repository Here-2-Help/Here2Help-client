import { Component, OnInit, Sanitizer }   from '@angular/core';
import { ActivatedRoute, Router }         from '@angular/router';
import { UserInfoService }                from '../services/userInfo.service';
import { Http, Response }                 from '@angular/http';
import { SearchService }                  from '../services/search.service';

import { MatDialog}                       from '@angular/material';

import { AddReviewComponent }             from '../add-review/add-review.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  allUsers:any        = [];
  allOrgs:any         = [];
  allEvents:any       = [];

  searchResults:any   = [];

  resultsList:Array<any>;

  constructor(
    public search: SearchService,
    public dialog: MatDialog,
    public AddReviewComponent: AddReviewComponent
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddReviewComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  searchAll(searchInput) {
    const query = new RegExp(searchInput.value, 'i');
    this.resultsList = this.searchResults.filter((result) => {
      if(result.firstName){
        return result.firstName.match(query) || result.lastName.match(query);
      } else if(result.address){
        return result.name.match(query);
      } else {
        return result.name.match(query);
      }
    });
  }

  ngOnInit() {
    this.search.pullAllUsers()
      .subscribe((returnedUsers)=>{
        this.allUsers = returnedUsers;
        this.searchResults.push(...returnedUsers);
      })
    this.search.pullAllOrgs()
      .subscribe((returnedOrgs)=>{
        this.searchResults.push(...returnedOrgs);
      })
    this.search.pullAllEvents()
      .subscribe((returnedEvents)=>{
        this.searchResults.push(...returnedEvents);
        this.resultsList = this.searchResults;
        // console.log(this.searchResults);
        // console.log(this.resultsList);
      })
  }

}
