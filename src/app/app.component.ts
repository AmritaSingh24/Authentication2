import { Component } from '@angular/core';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public service: RegisterService){}
}
