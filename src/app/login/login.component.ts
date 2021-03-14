import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // tslint:disable-next-line:comment-format
  //@Output() login = new EventEmitter<>();
clickMessage = '';

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onLogin(){
    this.clickMessage = 'You are my hero!';

  }
}
