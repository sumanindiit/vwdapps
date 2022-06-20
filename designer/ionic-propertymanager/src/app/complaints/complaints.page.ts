import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.page.html',
  styleUrls: ['./complaints.page.scss'],
})
export class ComplaintsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public segment: string = "pending";
segmentChanged(ev: any) {
  this.segment = ev.detail.value;
  }
}
