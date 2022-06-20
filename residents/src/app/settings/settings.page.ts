import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  userData: any;
  userId: any = localStorage.getItem('vwd_userid');
  PushNotification: any;

  constructor(
    public router: Router,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService,
  ) { }

  ionViewDidEnter() {
    this.userData = JSON.parse(localStorage.getItem('vwd_userData'));
    this.PushNotification = this.userData.pushNotification == 1 ? true : false;
    this.getCommunities();
    this.getResidentInfo();
  }

  ngOnInit() { }



  getResidentInfo(){
    this.api.post('get_resident_info', { user_id: this.userId}, '')
      .subscribe(
        (result) => {
          const res: any = result;
          if (res.status === 422 || res.status === '422') {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x + '</br>';
            }
          }
          else if (res.status === 200 || res.status === '200') {
            localStorage.setItem('vwd_userData',JSON.stringify(res.data)  );
          }
        },
        (error) => {
          console.log(error);
        });
  }



  getCommunities() {
    this.api.post('getUsersCommunities', '', '')
      .subscribe(
        (result) => {
          const res: any = result;
          if (res.status === 422 || res.status === '422') {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x + '</br>';
            }
          }
          else if (res.status === 200 || res.status === '200') {
            localStorage.setItem('vwd_communities',JSON.stringify(res.data));
          }
        },
        (error) => {
          console.log(error);
        });
  }

  PushNotificationfun(event) {
    let dict = {
      userId: this.userId,
      pushNotification: event,
    };

    this.api.post('updatePushNotificationStatus', dict, '')
      .subscribe(
        (result) => {
          let res: any;
          res = result;
          if (res.status == 422) {
            var errMsgs = '';
            for (var i = 0; i < res.errors.length; i++) {
              var obj = res.errors[i];
              errMsgs += obj + '</br>';
            }
            this.common.presentToast(errMsgs, 'danger');
          }
          else if (res.status == 200) {
            localStorage.setItem('vwd_userData', JSON.stringify(res.data));
            this.common.presentToast('Updated Successfully!.', 'success');
          }
        },
        (error) => {
          console.log(error);
        });
  }


  logout() {

    /*clear fcm token on user logout*/
    let dict = {
      userId: this.userId,
    };
    this.api.post('cleanUserFCMToken', dict, '')
      .subscribe(
        (result) => {
          let res: any;
          res = result;

        },
        (error) => {
          console.log(error);
        });


    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
