import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userId: any = localStorage.getItem('vwd_userid');
  constructor(
    public router: Router,
    private platform: Platform,
    private socket: Socket,
  ) {
    this.initializeApp();
    this.socket.connect();
    this.socket.on('removePlayerFromTeam', (payload, callback) => {
      console.log(payload);
      if (payload.userid) {
        if (this.userId == payload.userid.toString()) {
          if (payload.session_close == 1) {
            localStorage.clear();
            this.router.navigate(['/login']);
          }
        }
      }
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      if (localStorage.getItem('is_logged_in') == 'true') {
        this.router.navigate(['/tabs/home']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}