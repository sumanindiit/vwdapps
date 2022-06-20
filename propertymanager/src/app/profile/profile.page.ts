import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CommunitychangerequestPage } from '../communitychangerequest/communitychangerequest.page';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any;
  updateProfileForm: FormGroup;
  submitAttempt: boolean = false;
  userId: any = localStorage.getItem('vwd_userid');
  updatePasswordForm: FormGroup;
  submitPasswordAttempt: boolean = false;

  passwordType: string = 'password';
  confirmPasswordType: string = 'password';
  passwordIcon: string = 'eye-off';
  confirmPasswordIcon: string = 'eye-off';

  compareWith: any;

  MycommunityValue: any;
  customAlertOptions: any = {
    header: ' Select Community',
    translucent: true
  };

  allCommunities: any;

  constructor(
    public formBuilder: FormBuilder,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService,
    public router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    public modalController: ModalController
  ) { }

  ionViewDidEnter() { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CommunitychangerequestPage
    });
    return await modal.present();
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('vwd_userData'));

    this.updateProfileForm = this.formBuilder.group({
      name: [this.userData?.name, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      email: [this.userData?.email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phoneNo: [this.userData?.phoneNo, [Validators.required, Validators.pattern('^[0-9]+$')]],
      community: [this.userData?.community, [Validators.required]]
    });

    this.updatePasswordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this.matchingPasswords('password', 'confirmPassword')
    });

    this.getCommunities()

    this.MycommunityValue = this.userData.community;

  }

  getCommunities() {
    this.api.post('getCommunities', '', '')
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
            const yy = '"' + this.MycommunityValue + '"';
            this.updateProfileForm["controls"]["community"].setValue(this.userData.community.toString());
          }
        },
        (error) => {
          console.log(error);
        });

    return this.allCommunities;
  }

  get errorCtr() {
    return this.updateProfileForm.controls;
  }

  get errorPasswordCtr() {
    return this.updatePasswordForm.controls;
  }

  onSubmit() {
    this.submitAttempt = true;

    if (!this.updateProfileForm.valid) {
      //this.common.presentToast('Please fill all required fields.','danger');
      return false;
    } else {
      this.common.presentLoading();
      let dict = this.updateProfileForm.value;
      dict['userId'] = this.userId;
      dict['type'] = 'pickupPerson';
      this.api.post('updateProfile', dict, '')
        .subscribe(
          (result) => {
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
              localStorage.setItem('vwd_userData', JSON.stringify(res.data));
              this.common.presentToast('Profile Updated Successfully!.', 'success');
            }
          },
          (error) => {
            console.log(error);
          });
    }
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (updatePasswordForm: FormGroup): {
      [key: string]: any
    } => {
      let password = updatePasswordForm.controls[passwordKey];
      let confirmPassword = updatePasswordForm.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  onPasswordSubmit() {
    this.submitPasswordAttempt = true;

    if (!this.updatePasswordForm.valid) {
      //this.common.presentToast('Please fill all required fields.','danger');
      return false;
    } else {
      this.common.presentLoading();
      let dict = this.updatePasswordForm.value;
      dict['userId'] = this.userId;
      this.api.post('updatePassword', dict, '')
        .subscribe(
          (result) => {
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
              localStorage.clear();
              this.router.navigate(['/login']);
              this.common.presentToast('Password Updated Successfully!. Please Log in.', 'success');
            }
          },
          (error) => {
            console.log(error);
          });
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

  public segment: string = "basicinfo";
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
  showToolbar = false;

  onScroll($event) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 100;
    }
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
    //this.storage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

