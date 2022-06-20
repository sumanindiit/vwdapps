import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { CommonService } from '../services/common.service';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import 'rxjs/add/operator/debounceTime';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  residentData: any;
  userId: any = localStorage.getItem('vwd_userid');
  userStatus: any = localStorage.getItem('vwd_status');
  is_loaded: boolean = false;
  start: any;
  isMoreRecords: boolean = true;
  scrollEvent: any;
  recordsPerPage: any;
  residents: any;
  toggle: any = localStorage.getItem('vwd_status') == 'active' ? 1 : 2;
  userData: any;
  searchTerm: string;
  searchQuery: any;


  constructor(
    public router: Router,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService,
    private callNumber: CallNumber
  ) {
    this.recordsPerPage = 5;
  }
  hideMe = false;
  toggleClass() {
    this.hideMe = !this.hideMe;
  }
  ionViewWillEnter() {
    this.start = 0;
    this.residents = [];
    this.getAllResidents({}, '0');
    this.userData = JSON.parse(localStorage.getItem('vwd_userData'));

  }


  filterResidents(event) {
    this.searchQuery = event.srcElement.value;
    this.residents = [];
    this.getAllResidents({}, '0', this.searchQuery);
  }

  ngOnInit() { }

  NotifyUser(ReceiverId) {
    let dict = {
      userId: this.userId,
      receiverId: ReceiverId,
      title: 'VWD Pick Up',
      body: this.userData.name + ' is outside of your building to collected waste.'
    };
    this.api.post('sendPickUpNotificationSingleUser', dict, '')
      .subscribe(
        (result) => {
          this.common.presentToast('Notification Send Successfully!.', 'success');
          this.common.stopLoading();
        },
        (error) => {
          console.log(error);
          this.common.stopLoading();
        });
  }

  getAllResidents(event = {}, type = '', searchItem = '') {
    if (type === '0') { }
    else {
      this.scrollEvent = event;
      if (type === '1') {
        this.start = this.start + this.recordsPerPage;
      }
    }
    var self = this;

    setTimeout(() => {
      self.api.post('getAllResidents', { userId: this.userId, recordsPerPage: self.recordsPerPage, start: self.start, search: searchItem }, '')
        .subscribe(
          (result) => {
            this.common.stopLoading();
            const res: any = result;
            if (res.status === 422 || res.status === '422') {
              let errMsgs = '';
              for (const x of res.errors) {
                errMsgs += x + '</br>';
              }
              self.common.presentToast(errMsgs, 'danger');
              self.is_loaded = true;
              self.residentData = [];
            }
            else if (res.status === 200 || res.status === '200') {
              var loaded_records = self.start + self.recordsPerPage;
              if (loaded_records >= res.total) {
                self.isMoreRecords = false;
              }

              self.residents = self.residents.concat(res.data);
              if (type === '0') {
                self.common.stopLoading();
              }
              else {
                if (type === '1') {
                  self.scrollEvent.target.complete();
                }
              }
              this.residentData = self.residents;
              this.is_loaded = false;
            }
          },
          (error) => {
            console.log(error);
          });
    }, 500);
  }

  openDialer(tel) {
    if (tel)
      this.callNumber.callNumber(tel, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
  }

  public isOnline: boolean = this.userStatus == 'active' ? true : false;

  updateOnlineStatus(event) {

    if (event.detail.checked) {
      this.common.presentLoading();
      let dict = {
        userId: this.userId,
        title: 'VWD Pick Up',
        body: this.userData.name + ' is now started to collected waste.'
      };

      this.api.post('sendPickUpNotification', dict, '')
        .subscribe(
          (result) => {
            this.common.presentToast('Updated Successfully!.', 'success');
            localStorage.setItem('vwd_status', 'active');
            this.isOnline = !this.isOnline;
            this.common.stopLoading();
          },
          (error) => {
            console.log(error);
            this.common.stopLoading();
          });

      this.api.post('update_pickupuser_availablity', { availability: 'active', userId: this.userId}, '').subscribe((result) => {},(error) => {});
    }
    else {

      this.api.post('update_pickupuser_availablity', { availability: 'inactive',userId: this.userId }, '').subscribe((result) => {},(error) => {});
      localStorage.setItem('vwd_status', 'inactive');
      this.isOnline = !this.isOnline;
    }







  }

}
