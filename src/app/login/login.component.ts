import { Component, OnInit } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { Location } from '@angular/common';
import { LoginService } from './login.service';
import { Login } from './login';
import { Router, ROUTER_DIRECTIVES }              from '@angular/router';
import { LocalStorage, WEB_STORAGE_PROVIDERS } from 'h5webstorage';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives:
  [
  	ROUTER_DIRECTIVES,
  	PolymerElement('paper-dialog'),
    PolymerElement('paper-input')
  ],

  providers: [ LoginService, WEB_STORAGE_PROVIDERS ]
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  login: Login;
  mode = 'Observable';
  private loggedIn = false;


  constructor(private location: Location, private authService: LoginService, public router: Router, private localStorage: LocalStorage ) {

  }
  	name='';
  	password ='';
  	dataobject: string;

  ngOnInit() {
  	  var dialog :any = document.getElementById('dialog');
      dialog.open(); 
      dialog.noCancelOnOutsideClick = true;
  }

  singInEx(){

    this.location.back();
  }

  singIn(username : string, password : string){
  	var dialog :any = document.getElementById('dialog');
  	this.name = username;
  	this.password = password;
  	if(this.name && this.password){
		this.authService.getAuth(this.name, this.password).subscribe(
			data => { 
				if(data.login) {
					this.name = data.username;
					localStorage. setItem('auth_token',data.token);
					this.loggedIn = true;

					if(data.type == "admin") {
						this.router.navigate(['/user']);
					}else{

					}
					
				}
			}
			);
  		dialog.close(); 
  	}else{

  	}
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}
