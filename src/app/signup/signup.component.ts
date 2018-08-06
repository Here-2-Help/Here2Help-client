import { Component, OnInit } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { UserInfoService } from '../services/userInfo.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private localUserInfo: UserInfoService) { };

  newlyCreatedUser:any = {};

  signup(formInfo) {
    console.log(formInfo.value);
    this.localUserInfo.signup(formInfo.value)
      .subscribe((theNewUser)=>{
        router.navigate()
      })
  };

  ngOnInit() {
  }

}
