import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  MyreasonValue : string ;
customAlertOptions: any = {
    header: ' Select Reason',
    translucent: true
  };
  constructor() { this.MyreasonValue = "reason1" ;}
  ngOnInit() {
  }

}
