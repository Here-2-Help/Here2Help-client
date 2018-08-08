import { Component, OnInit, Sanitizer }   from '@angular/core';
import { ActivatedRoute, Router }         from '@angular/router';
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
    
  userDetails:any         = {};
  isOwner:Boolean         = false; // <-- STILL NOT IMPLEMENTED
  googleCity:any          = {};
  userZipCode:Number      = 0;
  userCity:String         = '';
  editingProfile:Boolean  = false;
  editedProfile:any       = {};
  currentUser:any         = {};

  deleteAccount() {
    this.localUserInfo.deleteAccount(this.userDetails._id)
      .subscribe((res)=>{
        return this.localRouter.navigate(['/']);
      })
  };

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

  ngOnInit() {
    this.userProfileRouter.params
    .subscribe((params)=>{
      this.localUserInfo.getOneUser(params['id'])
      .subscribe((returnedUserDetails)=>{
        this.userDetails    = returnedUserDetails;
        this.editedProfile  = returnedUserDetails;
        this.userZipCode    = returnedUserDetails.zipCode;
        this.pullCityFromZip(this.userZipCode);
        if(this.localUserInfo.currentUser._id === this.userDetails._id) return this.isOwner = true;

      })
    })
  }

  pullCityFromZip(zipCode){
    return this.http.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${this.userZipCode}&sensor=true`)
      .subscribe((responseFromGoogle)=>{
          this.googleCity = responseFromGoogle.json().results[0].address_components[1].long_name;
      })
  }
    
}
