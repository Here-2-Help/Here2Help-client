import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoService } from '../services/userInfo.service';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName: String;
  lastName: String;
  zipCode: String;
  phoneNumber: String;
  email: String;
  password: String;

  constructor(
    private localUserInfo: UserInfoService,
    private localRouter: Router
  ) { };

  newlyCreatedUser:any = {};

  signup(formInfo) {
    this.localUserInfo.signup(formInfo.value)
      .subscribe((theNewUser)=>{
        this.localRouter.navigate(['']);
      })
  };

  ngOnInit() {
  }
}
