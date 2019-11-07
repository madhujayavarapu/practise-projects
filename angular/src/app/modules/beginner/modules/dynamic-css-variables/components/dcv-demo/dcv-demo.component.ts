import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'ng-dcv-demo',
  templateUrl: './dcv-demo.component.html',
  styleUrls: ['./dcv-demo.component.scss']
})
export class DcvDemoComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  lightYellow: string= "#FF9800"; // If Empty
  darkOrange: string = "#E91E63"; // If Spaces are present
  lightRed: string = "#FF7043"; // If Not valid
  lightGreen: string = "#66BB6A"; // If Valid
  white: string = '#fff'; // Default
  dom: Document;

  usernameVar:string = "username-bg";
  passwordVar: string = "password-bg"; 

  validUserName: string = 'testuser';
  validPassword: string = 'mypassword';

  usernameStatus: number = 0;
  passwordStatus: number = 0;

  constructor(@Inject(DOCUMENT) dom: Document) { 
    this.dom = dom;
  }

  ngOnInit() {
  }

  login() {
    let val = this.loginForm.value;
    this.usernameStatus = this.changeColorOfField(val.username, 'username-bg', this.validUserName);
    this.passwordStatus = this.changeColorOfField(val.password, 'password-bg', this.validPassword);
  }

  changeColorOfField(val, key, validStr) {
    let status;
    if(!isNullOrUndefined(val) && val !== ''){
      if(val.indexOf(' ') == -1) {
        if(val == validStr) {
          this.changeColors([key], this.lightGreen);
          status = 4;
        }else {
          status = 3;
          this.changeColors([key], this.lightRed);
        }
      }else {
        this.changeColors([key], this.darkOrange);
        status = 2;
      }
    }else {
      status = 1;
      this.changeColors([key], this.lightYellow);
    }
    return status;
  }

  reset() {
    this.loginForm.reset();
    this.changeColors([this.usernameVar, this.passwordVar], this.white);
    this.usernameStatus = 0;
    this.passwordStatus = 0;
  }

  changeColors(keys: string[], color: string) {
    keys.forEach((key) => {
      this.dom.documentElement.style.setProperty(`--${key}`, color);
      if(color !== '#fff'){
        this.dom.documentElement.style.setProperty(`--dcv-text-color`, "#1A237E");
      }else {
        this.dom.documentElement.style.setProperty(`--dcv-text-color`, "#212121");
      }
    })
  }

}
