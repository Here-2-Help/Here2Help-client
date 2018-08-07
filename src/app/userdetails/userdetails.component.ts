import { Component, OnInit, Sanitizer }   from '@angular/core';
import { ActivatedRoute }                 from '@angular/router';
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
              private http:               Http) { };
    
  userDetails:any = {};
    
  isOwner:Boolean = true;

  googleCity:any = {};

  userZipCode:Number = 0;

  userCity:String = '';

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
        console.log('-----------------returnedUserDetails:',returnedUserDetails);
        this.userDetails = returnedUserDetails;
        // this.userZipCode = returnedUserDetails.zipCode;
        // console.log(this.userZipCode);
        // this.pullCityFromZip(this.userZipCode);
        // this.googleZipCodeTest();
      })
    })
  }

  // pullCityFromZip(zipCode){
  //   return this.http.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${this.userZipCode}&sensor=true`)
  //     .subscribe((googleCity)=>{
  //         // console.log(googleCity.json());
  //         // console.log(this.googleCity[0].postcode_localities[0]);
  //         return this.googleCity = googleCity.json().results;
  //     })
  // }
    
}
