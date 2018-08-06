import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { UserInfoService } from '../services/userInfo.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private localUserInfo:      UserInfoService,
              private userProfileRouter:  ActivatedRoute) { };

  userDetails:any = {};

  ngOnInit() {
    console.log('-----------------ActivatedRoute.params:',this.userProfileRouter.params)
    this.userProfileRouter.params
      .subscribe((params)=>{
        console.log("******************** params[''id]:",params['id']);
        this.localUserInfo.getOneUser(params['id'])
          .subscribe((returnedUserDetails)=>{
            console.log(returnedUserDetails);
            this.userDetails = returnedUserDetails;
          })
      })
  }

}
