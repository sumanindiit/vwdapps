import { Component, OnInit ,ViewChild} from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
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
  @ViewChild(IonInfiniteScroll,{static:true}) infiniteScroll: IonInfiniteScroll;
  notifications: any;
  userId: any = localStorage.getItem('vwd_userid');
  is_loaded: boolean = false;
  userData : any;

  start: any;
  isMoreRecords: boolean = true;
  scrollEvent: any;
  recordsPerPage: any;
  notificationsData: any;

  constructor(
    private common: CommonService,
    public api: ApiService,
    public router: Router,
    public alertController: AlertController
  ) { 
    this.recordsPerPage = 10;
  }

  ionViewWillEnter(){
    this.userData   = JSON.parse(localStorage.getItem('vwd_userData'));

    this.start = 0;
  	this.notificationsData = [];
    this.getNotifications({},'0');
  }
  ngOnInit(){}

  getNotifications(event={},type='')
  {
    if(type === '0' ){}
    else{
      this.scrollEvent = event;
      if(type === '1' ){
        this.start = this.start + this.recordsPerPage;
      }
    }
    var self = this;

    setTimeout(() => {
      self.api.post('getPropertyManagerNotifications', {userId:this.userId , recordsPerPage: self.recordsPerPage ,start: self.start ,status:1 ,community:this.userData.community },'')
      .subscribe(
        (result) => {
          const res: any = result;
          if(res.status === 422 || res.status === '422')
          {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x +'</br>';
            }
            self.notifications = [];
            self.is_loaded = true;
          }
          else if(res.status === 200 || res.status === '200')
          {
            var loaded_records = self.start+self.recordsPerPage;
            if(loaded_records >= res.total){
              self.isMoreRecords = false;
            }

            self.notificationsData = self.notificationsData.concat(res.data);
            if(type === '0'){
              self.common.stopLoading();
            }
            else{
              if(type === '1'){
                self.scrollEvent.target.complete();
              }
            }
            this.notifications = self.notificationsData;
            this.is_loaded =  false;
          }
        },
        (error) => {
          console.log(error);
        });
    }, 500);
  }

}
