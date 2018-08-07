import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../services/userInfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  errorMessage: String;

  constructor(
    private userInfo: UserInfoService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup(signupForm) {
    if(signupForm.value.password !== signupForm.value.password2) {
      this.errorMessage = 'Passwords do not match';
    } else {
      let newUser = new Object(signupForm.value);
      this.userInfo.signup(newUser)
      .subscribe(
          user => {this.router.navigate(['/'])},
          error => {this.errorMessage = error.json().message}    
      );
    }
  }

  login(loginForm) {
    this.userInfo.login(loginForm.value)
    .subscribe(
      user => {this.router.navigate(['/'])},
      error => {this.errorMessage = error.json().message}
    )
  }

  logout() {
    
  }

}
