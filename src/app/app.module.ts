import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { HttpModule }               from '@angular/http';
import { FormsModule }              from '../../node_modules/@angular/forms';

// v-- IMPORTS FOR ANGULAR MATERIAL UI PLUGINS --v

import { MaterialModule }           from './material.module'; // <-- TESTING TO SEE IF I CAN ELIMINATE THE
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

// v-- ROUTES --v
const routes: Routes = [
  {path: '',                component: LandingComponent     },
  {path: 'signup',          component: SignupComponent      },
  {path: 'profile/:id',         component: UserdetailsComponent },
  {path: 'test',            component: TestFormComponent    }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    TestFormComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule.forRoot()
  ],
  providers: [UserInfoService, OrgInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
