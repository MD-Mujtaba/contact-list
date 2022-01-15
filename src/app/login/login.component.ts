import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  login(loginData:{email:string;password:string}){
    console.log(loginData.password);
  }

  ngOnInit(): void {
  }

}
