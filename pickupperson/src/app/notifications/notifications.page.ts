import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { CommonService} from '../services/common.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications: any;
  userId: any = localStorage.getItem('vwd_userid');
  is_loaded: boolean = false;

  constructor(
    private common: CommonService,
    public api: ApiService,
    public router: Router,
    public alertController: AlertController
  ) { }

  ionViewWillEnter(){
    this.getNotifications();
  }
  ngOnInit(){}

  getNotifications()
  {
    this.api.post('getNotifications', {userId:this.userId },'')
      .subscribe(
        (result) => {
          const res: any = result;
          if(res.status === 422 || res.status === '422')
          {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x +'</br>';
            }
            //this.common.presentToast(errMsgs,'danger');
            this.notifications = [];
            this.is_loaded = true;
          }
          else if(res.status === 200 || res.status === '200')
          {
            this.notifications = res.data;
            this.is_loaded = false;
            console.log(this.notifications);
          }
        },
        (error) => {
          console.log(error);
        });
  }

}
