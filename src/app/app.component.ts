import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoService } from './services/userInfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isCollapsed:Boolean = true;

  constructor(
    public userInfo: UserInfoService,
    public router: Router
  ) {}
  
  ngOnInit() {
    this.userInfo.isLoggedIn().subscribe();
  }
  title = 'app';

  login(loginForm) {
    this.userInfo.login(loginForm.value)
    .subscribe(
      user =>   {this.router.navigate(['/'])},
      error =>  {}
    )
  }

  logout() {
    this.userInfo.logout()
    .subscribe(
      res =>    {this.router.navigate(['/'])},
      error =>  {}
    );
  }
}


// I'M HIDING ALL THIS HTML HERE IN CASE WE WANT TO GO BACK TO THE NORMAL BOOTSTRAP NAVBAR INSTEAD OF THE
// NG-BOOTSTRAP ONE

// <div class="container-fluid">
//     <nav class="navbar navbar-default navbar-fixed-top navbar-expand-lg navbar-light bg-light">

//         <!-- ---------------------------------------------- -->
//         <a class="navbar-brand" href="#"><b>Here2Help</b></a>
//         <!-- ----------------------------------------------- -->

//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
        
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav mr-auto">
//             <li class="nav-item active">

//                 <!-- ---------------------------------------------- -->
//                 <a class="nav-link" href="#">My Profile<span class="sr-only">(current)</span></a>
//                 <!-- ---------------------------------------------- -->

//             </li>
//             <li class="nav-item active">

//                 <!-- ---------------------------------------------- -->
//                 <a class="nav-link" href="#">Events</a>
//                 <!-- ---------------------------------------------- -->

//             </li>
//             <li class="nav-item active">

//                     <!-- ---------------------------------------------- -->
//                     <a class="nav-link" href="#">Organizations</a>
//                     <!-- ---------------------------------------------- -->
    
//                 </li>
//             <li class="nav-item dropdown">
//                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 Dropdown
//                 </a>
//                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a class="dropdown-item" href="#">Action</a>
//                     <a class="dropdown-item" href="#">Another action</a>
//                     <div class="dropdown-divider"></div>
//                     <a class="dropdown-item" href="#">Something else here</a>
//                 </div>
//             </li>
//             <li class="nav-item">

//                 <!-- ---------------------------------------------- -->
//                 <a class="nav-link disabled" href="#">Disabled</a>
//                 <!-- ---------------------------------------------- -->

//             </li>
//             </ul>
//             <form class="form-inline my-2 my-lg-0">
//             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//             </form>
//         </div>
//     </nav>
// </div>