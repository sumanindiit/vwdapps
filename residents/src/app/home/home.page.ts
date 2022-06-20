import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { CommonService} from '../services/common.service';
import { Router } from '@angular/router';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  reasonValue: string ;
  customAlertOptions: any = {
    header: ' Select Reason',
    translucent: true
  };

  valletData: any;

  notificationForm: FormGroup;
  submitAttempt: boolean = false;
  userId: any = localStorage.getItem('vwd_userid');
  valletId: any = localStorage.getItem('vwd_valletid');

  constructor(
    public formBuilder: FormBuilder,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService,
    public router: Router,
  ) {
    this.reasonValue = 'reason1' ;
  }
  ngOnInit() {
    this.notificationForm = this.formBuilder.group({
      selectReason: ['', [Validators.required]],
      valletId:[this.valletId, [Validators.required]]
    });
    this.getValletInfo();
  }

  get errorCtr() {
    return this.notificationForm.controls;
  }

  getValletInfo()
  {
    this.api.post('getValletInfo', {userId: this.userId},'')
      .subscribe(
        (result) => {
          const res: any = result;
          if(res.status === '422' || res.status === 422 )
          {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x +'</br>';
            }
            this.common.presentToast(errMsgs,'danger');
          }
          else if(res.status === '200' || res.status === 200)
          {
            this.valletData = res.data.user;
          }
        },
        (error) => {
          console.log(error);
        });
  }

  onSubmit() {
    this.submitAttempt = true;

    if (!this.notificationForm.valid) {
        return false;
    } else {
      this.common.presentLoading();
      const dict = this.notificationForm.value;
      const formData = new FormData();

      formData.append('message', this.notificationForm.value.selectReason);
      formData.append('toId', this.valletId);
      formData.append('userId', this.userId);
      formData.append('type', '1');

      this.api.post('saveNotifications', formData,'')
      .subscribe(
        (result) => {
          console.log('in result');
          this.submitAttempt = false;
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
            this.sendPushNotifications(this.notificationForm.value.selectReason);
            this.common.presentToast('Sent Successfully!.','success');
            this.notificationForm["controls"]["selectReason"].reset();
            //this.notificationForm.value.selectReason =  '';
          }
        },
        (error) => {
          console.log(error);
        });
    }
  }

  sendPushNotifications(msgBody,title = ''){
    const formData = new FormData();
    formData.append('userId', this.userId);
    formData.append('toId', this.valletId);
    formData.append('body', msgBody);
    formData.append('title', 'Notifications');

    this.api.post('sendresidentPushNotifications', formData,'')
      .subscribe(
        (result) => { },
        (error) => {
          console.log(error);
        });
  }


}
