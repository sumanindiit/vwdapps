import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
customAlertOptions: any = {
    header: ' Select Community',
    translucent: true
  };
  constructor() { }

  ngOnInit() {
  }

}
