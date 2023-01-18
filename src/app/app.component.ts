import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login-component/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private loginService:LoginService){}


  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyB3kShXJgADTGdK_i7Z-MoIbfDd7qYFpLM",
      authDomain: "mis-clientes-de790.firebaseapp.com"
    });
  }


  isLogueado(){
    return this.loginService.isLogueado();
  }

  logout(){
    return this.loginService.logout();
  }

}
