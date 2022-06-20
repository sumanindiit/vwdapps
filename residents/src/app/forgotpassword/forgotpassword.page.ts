import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ApiService } from '../services/api/api.service';
import { config } from '../config';
import {CommonService} from '../services/common.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  forgotPassword: FormGroup;
  verifyOTP: FormGroup;
  resetPassword: FormGroup;
  submitAttempt: boolean = false;
  submitAttemptOTP: boolean = false;
  submitPasswordAttempt: boolean = false;
  step: any = '1';
  otp_id: any;
  otp: any;

  passwordType: string = 'password';
  confirmPasswordType: string = 'password';
  passwordIcon: string = 'eye-off';
  confirmPasswordIcon: string = 'eye-off';


  constructor(
    public formBuilder: FormBuilder,
    private common: CommonService,
    public api: ApiService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.forgotPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });
    this.verifyOTP = this.formBuilder.group({
      otp: ['', [Validators.required]]
    });
    this.resetPassword = this.formBuilder.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this.matchingPasswords('password', 'confirmPassword')
    })
  }

  get errorCtr() {
    return this.forgotPassword.controls;
  }
  get errorCtrOTP() {
    return this.verifyOTP.controls;
  }
  get errorPasswordCtr() {
    return this.resetPassword.controls;
  }

  onVerifyOTP(){
    this.submitAttemptOTP = true;
    if (!this.verifyOTP.valid) {
        return false;
    } else {
      this.common.presentLoading();
      let dict = {
        otp_id: this.otp_id, 
        otp : this.verifyOTP.value.otp
      };
      this.api.post('verifyOTP', dict,'')
      .subscribe(
        (result) => {
          this.submitAttempt = false;
          this.common.stopLoading();
          let res: any;
          res = result;
          if(res.status == 422 )
          {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x +'</br>';
            }
            this.common.presentToast(errMsgs,'danger');
          }
          else if(res.status == 200)
          {
            this.verifyOTP.reset()
            this.common.presentToast('OTP verified!.','success');
            this.step = '3';
            this.otp = res.otp;
            
          }
        },
        (error) => {
          console.log(error);
        });
    }
  }

  onSubmit() {
    this.submitAttempt = true;

    if (!this.forgotPassword.valid) {
        return false;
    } else {
      this.common.presentLoading();
      let dict = this.forgotPassword.value;
      this.api.post('forgotPassword', dict,'')
      .subscribe(
        (result) => {
          this.submitAttempt = false;
          this.common.stopLoading();
          let res: any;
          res = result;
          if(res.status == 422 )
          {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x +'</br>';
            }
            this.common.presentToast(errMsgs,'danger');
          }
          else if(res.status == 200)
          {
            this.forgotPassword.reset();
            this.common.presentToast('OTP sent on your email address!.','success');
            this.step = '2';
            this.otp_id = res.email;
          }
        },
        (error) => {
          console.log(error);
        });
    }
  }

  onResetPassword(){
    this.submitPasswordAttempt = true;

    if (!this.resetPassword.valid) {
        //this.common.presentToast('Please fill all required fields.','danger');
        return false;
    } else {
      this.common.presentLoading();
      let dict = this.resetPassword.value;
      dict['otp'] = this.otp;
      dict['otp_id'] = this.otp_id;
      this.api.post('resetPassword', dict,'')
      .subscribe(
        (result) => {
          this.submitAttempt = false;
          this.common.stopLoading();
          let res: any;
          res = result;
          if(res.status == 422 )
          {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x +'</br>';
            }
            this.common.presentToast(errMsgs,'danger');
          }
          else if(res.status == 200)
          {
            //localStorage.clear();
            this.resetPassword.reset()
            this.router.navigate(['/login']);
            this.common.presentToast('Password Updated Successfully!. Please Log in.','success');
          }
        },
        (error) => {
          console.log(error);
        });
    }
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (resetPassword: FormGroup): {
      [key: string]: any
    } => {
       let password = resetPassword.controls[passwordKey];
       let confirmPassword = resetPassword.controls[confirmPasswordKey];
 
        if (password.value !== confirmPassword.value) {
          return {
            mismatchedPasswords: true
          };
        }
    }
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  hideShowConfirmPassword() {
    this.confirmPasswordType = this.confirmPasswordType === 'text' ? 'password' : 'text';
    this.confirmPasswordIcon = this.confirmPasswordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }


}
