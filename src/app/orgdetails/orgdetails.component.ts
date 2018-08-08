import { Component, OnInit } from '@angular/core';
import { OrgInfoService } from '../services/orgInfo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orgdetails',
  templateUrl: './orgdetails.component.html',
  styleUrls: ['./orgdetails.component.css']
})
export class OrgdetailsComponent implements OnInit {


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
      .subscribe(res => console.log(res));
    })
  }
}
