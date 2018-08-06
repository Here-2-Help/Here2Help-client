import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { HttpModule }               from '@angular/http';

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
import { UserinfoService } from './services/userinfo.service';
import { FormsModule } from '../../node_modules/@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// v-- ROUTES --v
const routes: Routes = [
  {path: '', component: LandingComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [UserinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
