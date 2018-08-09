
import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { HttpModule }               from '@angular/http';
import { FormsModule }              from '../../node_modules/@angular/forms';

// v-- IMPORTS FOR ANGULAR MATERIAL UI PLUGINS --v

// import { MaterialModule }           from './material.module'; // <-- TESTING TO SEE IF I CAN ELIMINATE THE
                                                              //     HUGE LIST OF MATERIAL IMPORTS
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
// ^-- ANIMATIONS MODULE HAS TO COME FIRST

// v-- COMPONENT IMPORTS --v

import { AppComponent }             from './app.component';
import { LandingComponent }         from './landing/landing.component'
import { SignupComponent }          from './signup/signup.component';

// v-- SERVICES IMPORTS --v
import { UserInfoService }          from './services/userInfo.service';
import { OrgInfoService }           from './services/orgInfo.service'

import { NgbModule }                from '@ng-bootstrap/ng-bootstrap';
import { TestFormComponent }        from './test-form/test-form.component';
import { UserdetailsComponent }     from './userdetails/userdetails.component';
import { OrgdetailsComponent }      from './orgdetails/orgdetails.component';
import { SearchComponent }          from './search/search.component';
import { SearchService }            from './services/search.service';

import { AddReviewComponent }       from './add-review/add-review.component';

import { MatDialog, MatDialogModule }                from '../../node_modules/@angular/material';

import { EventdetailsComponent }    from './eventdetails/eventdetails.component';
import { EventInfoService }         from './services/event-info.service';


// v-- ROUTES --v
const routes: Routes = [
  {path: '',                component: LandingComponent     }, // <-- LANDING PAGE

  {path: 'search',          component: SearchComponent      },
  
  {path: 'signup',          component: SignupComponent      }, // <-- SIGNUP PAGE
  {path: 'users',           component: UserdetailsComponent }, // <-- LIST OF ALL USERS
  {path: 'profile/:id',     component: UserdetailsComponent }, // <-- MY PROFILE PAGE + OTHER USERS' PROFILES

  {path: 'orgs',            component: OrgdetailsComponent  }, // <-- LIST OF ALL ORGS
  {path: 'org/:id',         component: OrgdetailsComponent  }, // <-- ORG DETAILS PAGE

  {path: 'events',          component: EventdetailsComponent }, // <-- LIST OF ALL EVENTS
  {path: 'event/:id',       component: EventdetailsComponent }, // <-- EVENT DETAILS PAGE

  {path: 'reviews',         component: UserdetailsComponent }, // <-- ?? ALL REVIEWS
  {path: 'review/:id',      component: UserdetailsComponent }, // <-- REVIEW DETAILS PAGE
  {path: 'addreview',       component: AddReviewComponent   },

  {path: 'test',            component: TestFormComponent    }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    TestFormComponent,
    UserdetailsComponent,
    OrgdetailsComponent,
    SearchComponent,

    AddReviewComponent,

    EventdetailsComponent

  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    // MaterialModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    AddReviewComponent
  ],
  providers: [  UserInfoService,
                OrgInfoService,

                SearchService,
                AddReviewComponent,
                SearchComponent

                SearchService, 
                EventInfoService

              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
