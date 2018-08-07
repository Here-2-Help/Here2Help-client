import { Component, OnInit, Sanitizer }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { UserInfoService }    from '../services/userInfo.service';

@Component({
  selector:     'app-userdetails',
  templateUrl:  './userdetails.component.html',
  styleUrls:    ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  videoUrl: any;
  dangerousVideoUrl(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  googleMapsURL: string;

  
  constructor(private localUserInfo:      UserInfoService,
              private userProfileRouter:  ActivatedRoute,
              private localDOMSanitizer:  Sanitizer) { };
    
    userDetails:any = {};
    
    isOwner:Boolean = true;

    safeGoogleMapsURL:String = ''

    dangerousGoogleMapsURL:String = '';
    
    ngOnInit() {
      this.userProfileRouter.params
      .subscribe((params)=>{
        this.localUserInfo.getOneUser(params['id'])
        .subscribe((returnedUserDetails)=>{
          console.log(returnedUserDetails);
          this.userDetails = returnedUserDetails;
          this.googleMapsURL = `https://www.google.com/maps/embed/v1/place?key=${this.localUserInfo.key}&q=${returnedUserDetails.zipCode}`;
        })
      })
    }
    
}
