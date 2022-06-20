import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {ApiService } from '../services/api/api.service';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import {Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logInForm: FormGroup;
  submitAttempt: boolean = false;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  fcmToken: any;
 

  constructor(
    public formBuilder: FormBuilder,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api:ApiService,
    public router:Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
    });

    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else { }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      this.fcmToken = token.value;
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });

  }


  get errorCtr() {
    return this.logInForm.controls;
  }


  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  onSubmit() {
    this.submitAttempt = true;

    if (!this.logInForm.valid) {
        this.common.presentToast('Please fill all required fields.','danger');
        return false;
    } else {
      this.common.presentLoading();
      let dict = this.logInForm.value;
      dict['fcmToken'] = this.fcmToken;
      this.api.post('login', dict,'')
      .subscribe(
        (result) => {
          this.submitAttempt = false;
          this.common.stopLoading();
          let res: any;
          res = result;
          if(res.status == 422 )
          {
            this.common.presentToast('Incorrect Username or Password.','danger');
          }
          else if(res.status == 200)
          {
            localStorage.setItem('vwd_userData',JSON.stringify(res.data)  );
            var userId = this.api.encryptData(res.userId,config.ENC_SALT);
            localStorage.setItem('vwd_userid',res.userId);
            localStorage.setItem('vwd_valletid',res.data.vwd_valletid);
            localStorage.setItem('vwd_valletName',res.data.vwd_valletName);
            localStorage.setItem('vwd_token',userId);
            var userToken = res.token;
            localStorage.setItem('user_access_token',userToken);
            localStorage.setItem('is_logged_in','true');
            this.logInForm.reset()
            this.common.presentToast('Logged In Successfully!.','success');
            this.api.navCtrl.navigateRoot('/tabs/home');
          }
        },
        (error) => {
          console.log(error);
        });
    }
  }

}
