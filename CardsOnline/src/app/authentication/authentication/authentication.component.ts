import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  public notEqual = false;
  public showLogin = true;
  constructor(private authProvider: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }
  public register(form: NgForm) {
    const email = form.controls.email.value;
    const username = form.controls.username.value;
    const password = form.controls.password.value;
    const passwordRepeated = form.controls.repeatedPassword.value;
    if(password === passwordRepeated && email && username) {
      this.notEqual = false;
      this.authProvider.register(username, email, password);
    } else {
      this.notEqual = true;
    }
  }
  
  public login(form: NgForm) {
    const username = form.controls.username.value;
    const password = form.controls.password.value;
    this.authProvider.login(username, password).then(key => { 
      sessionStorage.setItem('playerKey', key.toString());
      this.router.navigate(['home']);
    });
  }
}
