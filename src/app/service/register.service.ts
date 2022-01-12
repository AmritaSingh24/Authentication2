import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registerUrl = "http://localhost:3000/api/auth/register";
  loginUrl = "http://localhost:3000/api/auth/login";
  googleUrl = "http://localhost:3000/api/auth/google";
  facebookUrl = "http://localhost:3000/api/auth/facebook"

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  registerUser(user: any){
    return this.http.post<any>(this.registerUrl, user)
  }
  loginUser(user: any){
    return this.http.post<any>(this.loginUrl, user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  signinWithGoogle(token: any){
    return this.http.post<any>(this.googleUrl, token)
  }
  loginWithFacebook(token: any){
    return this.http.post<any>(this.facebookUrl, token)
  }
  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
}

