import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    name: '',
    email: '',
    password: ''
  }
  
  constructor(
    private auth: RegisterService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.auth.registerUser(this.registerUserData)
    .subscribe(
      res => {console.log(res)
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
    console.log(this.registerUserData)
  }
}
