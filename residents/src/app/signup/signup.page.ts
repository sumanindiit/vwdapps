import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpForm: FormGroup;
  submitAttempt: boolean = false;
  passwordType: string = 'password';
  confirmPasswordType: string = 'password';
  passwordIcon: string = 'eye-off';
  confirmPasswordIcon: string = 'eye-off';
  allCommunities: any;

  customAlertOptions: any = {
    header: 'Select Community',
    translucent: true
  };


  constructor(
    public formBuilder: FormBuilder,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      buildingNo: ['', [Validators.required, Validators.minLength(3)]],
      apartmentNo: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
      confirmPassword: ['', Validators.required],
      community: ['', [Validators.required]],
    }, {
      validator: this.matchingPasswords('password', 'confirmPassword')
    });

    this.getCommunities();

  }

  get errorCtr() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    this.submitAttempt = true;

    if (!this.signUpForm.valid) {
      //this.common.presentToast('Please fill all required fields.','danger');
      return false;
    } else {
      this.common.presentLoading();
      let dict = this.signUpForm.value;
      this.api.post('register', dict, '')
        .subscribe(
          (result) => {
            console.log('in result');
            this.submitAttempt = false;
            this.common.stopLoading();
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
              this.api.post('saveAdminNotifications', { type: 2, content: dict.email + ' has created an account as Resident' }, '')
                .subscribe(
                  (result) => { },
                  (error) => {
                    console.log(error);
                  });
              this.signUpForm.reset()
              this.common.presentToast('Registered Successfully!.', 'success');
              this.api.navCtrl.navigateRoot('/login');
            }
          },
          (error) => {
            this.common.stopLoading();
            console.log('in error');
            console.log(error);
          });
    }
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (signUpForm: FormGroup): {
      [key: string]: any
    } => {
      let password = signUpForm.controls[passwordKey];
      let confirmPassword = signUpForm.controls[confirmPasswordKey];

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
            this.allCommunities = [];
          }
          else if (res.status === 200 || res.status === '200') {
            this.allCommunities = res.data;
          }
        },
        (error) => {
          console.log(error);
        });
  }

}
