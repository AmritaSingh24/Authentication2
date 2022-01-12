import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: SocialUser;
  // Store login user data
  loginUserData = {
    email: '',
    password: ''
  }

  constructor( 
    private loginService: RegisterService,
    private router: Router,
    private authService: SocialAuthService
    ) { }

  ngOnInit(): void {  }

  // Login by email and password
  loginUser(){
    this.loginService.loginUser(this.loginUserData)
    .subscribe(
      res => {
        // console.log(res)
        localStorage.setItem('token', res.jwtToken)
        this.router.navigate(['/Demo'])
      },
      err => {
        console.log(err)
      }
    )
    // console.log(this.loginUserData)
  }

  // Login by google account
  signinGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>{
      let tokenId = {
        "tokenId": data.idToken
      }
      this.loginService.signinWithGoogle(tokenId)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.jwtToken)
          this.router.navigate(['/Demo'])
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  // Login with Facebook
  signinFacebook(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data)=>{
      let token = {
        "userID": data.id,
        "accessToken": data.authToken
      }
      this.loginService.loginWithFacebook(token).subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.jwtToken)
          this.router.navigate(['/Demo'])
        },
        err => {
          console.log(err)
        }
      )
    })
  }

}
