import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../services/api/api.service';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-communitychangerequest',
  templateUrl: './communitychangerequest.page.html',
  styleUrls: ['./communitychangerequest.page.scss'],
})
export class CommunitychangerequestPage implements OnInit {
  userData: any;
  updateChangeCommunityForm: FormGroup;
  submitAttempt: boolean = false;
  userId: any = localStorage.getItem('vwd_userid');
  MycommunityValue: any;

  allCommunities: any;
  isDisabled: boolean = true;

  constructor(
    public modalCtrl: ModalController,
    public formBuilder: FormBuilder,
    public api: ApiService,
    private common: CommonService,
  ) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('vwd_userData'));

    this.checkRequestStatus();

    this.updateChangeCommunityForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      community: ['', [Validators.required]]
    });

    this.getCommunities();

  }

  checkRequestStatus(){
    this.common.presentLoading();
      this.api.post('check_status_for_previous_request', {userId: this.userId}, '')
        .subscribe(
          (result) => {
            this.common.stopLoading();
            let res: any;false
            res = result;
            if (res.status === 422 || res.status === '422' ) {
              let errMsgs = '';
              for (var i = 0; i < res.errors.length; i++) {
                var obj = res.errors[i];
                errMsgs += obj + '</br>';
              }
              this.common.presentToast(errMsgs, 'danger');

            }
            else if (res.status == 200 || res.status === '200') {
              this.isDisabled = false;
            }
          },
          (error) => {
            console.log(error);
          });
  }

  get errorCtr() {
    return this.updateChangeCommunityForm.controls;
  }

  onSubmit() {
    this.submitAttempt = true;

    if (!this.updateChangeCommunityForm.valid) {
      //this.common.presentToast('Please fill all required fields.','danger');
      return false;
    } else {
      this.common.presentLoading();
      let dict = this.updateChangeCommunityForm.value;
      dict['userId'] = this.userId;
      this.api.post('change_request_for_community', dict, '')
        .subscribe(
          (result) => {
            this.submitAttempt = false;
            this.common.stopLoading();
            let res: any;
            res = result;

            console.log(res);
            if (res.status === 422 || res.status === '422') {
              let errMsgs = '';
              for (var i = 0; i < res.errors.length; i++) {
                var obj = res.errors[i];
                errMsgs += obj + '</br>';
              }

              this.common.presentToast(errMsgs, 'danger');

            }
            else if (res.status == 200 || res.status == '200') {
              this.common.presentToast('Requested Successfully!.', 'success');
            }
          },
          (error) => {
            console.log(error);
          });
    }
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
            this.updateChangeCommunityForm["controls"]["community"].setValue(this.userData.community.toString());
          }
        },
        (error) => {
          console.log(error);
        });

    return this.allCommunities;
  }


  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
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

}
