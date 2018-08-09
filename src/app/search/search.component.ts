import { Component, OnInit, Sanitizer }   from '@angular/core';
import { ActivatedRoute, Router }         from '@angular/router';
import { UserInfoService }                from '../services/userInfo.service';
import { Http, Response }                 from '@angular/http';
import { SearchService }                  from '../services/search.service';

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

  constructor(
    public search: SearchService
  ) { }

  searchAll(searchString){
    
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
        console.log(this.searchResults);
      })
  }

}
