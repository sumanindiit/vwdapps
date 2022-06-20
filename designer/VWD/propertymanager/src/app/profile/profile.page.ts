import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  MycommunityValue : string ;
customAlertOptions: any = {
    header: ' Select Community',
    translucent: true
  };
  constructor() { this.MycommunityValue = "community1" ;}

  ngOnInit() {
  }
  public segment: string = "basicinfo";
segmentChanged(ev: any) {
  this.segment = ev.detail.value;
  }
   showToolbar = false;
  onScroll($event) 
  {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 100;
    }
  }
}
