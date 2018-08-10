import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public readonly views = ['login', 'register'];
  public view = 'login';

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  public registrationForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  public onLogin(): void {
    this.authService.login(this.loginForm.value)
      .subscribe(response => {
        // console.log(response);
      });
  }

  public onRegister(): void {
    this.authService.register(this.registrationForm.value)
      .subscribe(response => {
        // console.log(response);
      });
  }

  public setView(view: string): void {
    this.view = view;
  }
}
