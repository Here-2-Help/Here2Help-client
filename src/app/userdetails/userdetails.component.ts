import { Component, OnInit, Sanitizer }   from '@angular/core';
import { ActivatedRoute, Router }                 from '@angular/router';
import { UserInfoService }                from '../services/userInfo.service';
import { Http, Response }                 from '@angular/http';

@Component({
  selector:     'app-userdetails',
  templateUrl:  './userdetails.component.html',
  styleUrls:    ['./userdetails.component.css']
})

export class UserdetailsComponent implements OnInit {
  
  constructor(private localUserInfo:      UserInfoService,
              private userProfileRouter:  ActivatedRoute,
              private localDOMSanitizer:  Sanitizer,
              private http:               Http,
              private localRouter:        Router) { };
    
  userDetails:any = {};
    
  isOwner:Boolean = true;

  googleCity:any = {};

  userZipCode:Number = 0;

  userCity:String = '';

  editingProfile:Boolean = false;

  editedProfile:any = {};

  editProfile(){
    if (this.editingProfile) {
      return this.editingProfile = false;
    } else {
      return this.editingProfile = true;
    }
  }

  saveEditedProfile(editedUserInfo) {
    this.localUserInfo.editUser(this.userDetails._id, editedUserInfo.value)
      .subscribe((updatedUserInfo)=>{
        this.editedProfile = updatedUserInfo;
        this.editProfile();
      })
  };

  // googleZipCodeTest(){
  //   return this.localUserInfo.pullCityFromZip(this.userZipCode)
  //     .subscribe((googleZip)=>{
  //       console.log('-------------------this.userZipCode:',this.userZipCode);
  //       console.log(googleZip.json());
  //       return googleZip.json();
  //     })
  // }

  // getOneUser(userID) {
  //   return this.http.get(`http://localhost:3000/api/users/${userID}`)
  //     .map((userDetails)=>{
  //       return userDetails.json()
  //     });
  // }
    
  ngOnInit() {
    this.userProfileRouter.params
    .subscribe((params)=>{
      this.localUserInfo.getOneUser(params['id'])
      .subscribe((returnedUserDetails)=>{
        this.userDetails = returnedUserDetails;
        this.editedProfile = returnedUserDetails;
        this.userZipCode = returnedUserDetails.zipCode;
        this.pullCityFromZip(this.userZipCode);
      })
    })
  }

  pullCityFromZip(zipCode){
    return this.http.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${this.userZipCode}&sensor=true`)
      .subscribe((responseFromGoogle)=>{
          return this.googleCity = responseFromGoogle.json().results[0].postcode_localities[0];
      })
  }
    
}
