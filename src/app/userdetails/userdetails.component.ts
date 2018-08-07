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

  saveEditedProfile() {
    console.log(this.editedProfile.value);
    this.localUserInfo.editUser(this.userDetails._id,this.editedProfile)
      .subscribe((updatedUserInfo)=>{
        console.log(updatedUserInfo)
        this.localRouter.navigate(['']);
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
        // console.log('-----------------returnedUserDetails:',returnedUserDetails);
        this.userDetails = returnedUserDetails;
        this.editedProfile = returnedUserDetails;
        // console.log(this.editedProfile);
        this.userZipCode = returnedUserDetails.zipCode;
        // console.log(this.userZipCode);
        this.pullCityFromZip(this.userZipCode);
        // this.googleZipCodeTest();
      })
    })
  }

  pullCityFromZip(zipCode){
    return this.http.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${this.userZipCode}&sensor=true`)
      .subscribe((responseFromGoogle)=>{
          // console.log('-----------------------responseFromGoogle.json()',responseFromGoogle.json().results[0].postcode_localities[0]);
          // console.log('----------------------------unformatted res',responseFromGoogle);
          // console.log(this.googleCity);
          return this.googleCity = responseFromGoogle.json().results[0].postcode_localities[0];
      })
  }
    
}
