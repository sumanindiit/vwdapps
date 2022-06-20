import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-complaintdetail',
  templateUrl: './complaintdetail.page.html',
  styleUrls: ['./complaintdetail.page.scss'],
})
export class ComplaintdetailPage implements OnInit {
  pageData: any;
  complaintId: any;
  userData: any;

  constructor(
    route: ActivatedRoute,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService,
    ) {
      this.complaintId = route.snapshot.paramMap.get('complaintId');
    }

  ionViewWillEnter(){

    this.getPageData();
  }

  ngOnInit() {

     this.userData   = JSON.parse(localStorage.getItem('vwd_userData'));
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        //this.common.presentToast('Permissions not given.','danger');
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      console.log('Push registration success, token: ' + token.value);
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        console.log('Push received: ' + JSON.stringify(notification));
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        console.log('Push action performed: ' + JSON.stringify(notification));
      },
    );




  }

  getPageData()
  {
    this.api.post('getComplaintDetail', {complaintId:this.complaintId },'')
      .subscribe(
        (result) => {
          this.common.stopLoading();
          const res: any = result;
          if(res.status === 422 || res.status === '422')
          {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x +'</br>';
            }
            this.common.presentToast(errMsgs,'danger');
          }
          else if(res.status === 200 || res.status === '200')
          {
            this.pageData = res.data ;
            console.log(this.pageData);
          }
        },
        (error) => {
          console.log(error);
        });
  }


  markAsCompleted()
  {
    this.common.presentLoading();
    this.api.post('updateComplaintStatus', {complaintID:this.complaintId , status:3 },'')
      .subscribe(
      (result) => {
        this.common.stopLoading();
        const res: any = result;
        if(res.status === 422 || res.status === '422')
        {
          let errMsgs = '';
          for (const x of res.errors) {
            errMsgs += x +'</br>';
          }
          this.common.presentToast(errMsgs,'danger');
        }
        else if(res.status === 200 || res.status === '200')
        {

          this.api.post('saveAdminNotifications', { type: 1, content: this.userData?.name + ' has moved complaint to completed.' }, '')
                .subscribe(
                  (result) => { },
                  (error) => {
                    console.log(error);
                  });


          this.common.presentToast('Updated Successfully!.','success');
          this.api.navCtrl.navigateRoot('/tabs/complaints/'+ (+new Date).toString(6).slice(-5));
        }
      },
      (error) => {
        console.log(error);
      });
  }

}
