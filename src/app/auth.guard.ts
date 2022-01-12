import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { RegisterService } from './service/register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor( 
    private loginService: RegisterService,
    private router: Router
    ) { }
  
  canActivate():boolean {
      if(this.loginService.loggedIn()){
        return true
      }else{
        this.router.navigate(['/'])
        return false
      }
  }
  
}
