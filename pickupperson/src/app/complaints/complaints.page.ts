import { Component, OnInit,ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import {Router } from '@angular/router';
import {ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.page.html',
  styleUrls: ['./complaints.page.scss'],
})
export class ComplaintsPage implements OnInit {
  @ViewChild(IonInfiniteScroll,{static:true}) infiniteScroll: IonInfiniteScroll;
  pendingData: any;
  userId: any = localStorage.getItem('vwd_userid');
  is_loaded: boolean = false;
  is_completedloaded: boolean = false;
  start: any;
  isMoreRecords: boolean = true;
  scrollEvent: any;
  recordsPerPage: any;
  PendingComplaints: any;

  completedData: any;
  completedStart: any;
  isMoreRecordsCompleted: any;
  completedComplaints: any;
  searchQuery: any;
  public segment: string = "pending";

  constructor(
    public router: Router,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService,
    private callNumber: CallNumber
  ) { 
    this.recordsPerPage = 5;
    
  }

  hideMe=false;
  toggleClass(){
   this.hideMe=!this.hideMe;
  }

  ionViewWillEnter(){
    this.start = 0;
  	this.PendingComplaints = [];
    this.getPendingComplaints({},'0');

    this.completedStart = 0;
  	this.completedComplaints = [];
    this.getCompletedComplaints({},'0');
  }

  ngOnInit() {}

  filterComplaints(event)
  {
    this.searchQuery = event.srcElement.value;

    if(this.segment === 'pending')
    {
      this.PendingComplaints = [];
      this.getPendingComplaints({},'0',this.searchQuery);
    }

    if(this.segment === 'completed')
    {
      this.completedComplaints = [];
      this.getCompletedComplaints({},'0', this.searchQuery);
    }

  }

  getPendingComplaints(event={},type='',searchItem = '' ){
  	if(type === '0' ){}
    else{
      this.scrollEvent = event;
      if(type === '1' ){
        this.start = this.start + this.recordsPerPage;
      }
    }
    var self = this;
 
    setTimeout(() => {
      self.api.post('getPickupPersonComplaints', {userId:this.userId , recordsPerPage: self.recordsPerPage ,start: self.start ,status:1 ,search: searchItem},'')
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
            self.common.presentToast(errMsgs,'danger');
            this.pendingData = [];
            self.is_loaded =  true;
          }
          else if(res.status === 200 || res.status === '200')
          {
            var loaded_records = self.start+self.recordsPerPage;
            if(loaded_records >= res.total){
              self.isMoreRecords = false;
            }

            self.PendingComplaints = self.PendingComplaints.concat(res.data);
            if(type === '0'){
              self.common.stopLoading();
            }
            else{
              if(type === '1'){
                self.scrollEvent.target.complete();
              }
            }
            this.pendingData = self.PendingComplaints;
            this.is_loaded =  false;
          }
        },
        (error) => {
          console.log(error);
        });
    }, 500);
  }

  getCompletedComplaints(event={},type='',searchItem = '' )
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
      self.api.post('getPickupPersonComplaints', {userId:this.userId , recordsPerPage: self.recordsPerPage ,start: self.start ,status:3 ,search: searchItem},'')
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
            self.common.presentToast(errMsgs,'danger');
            self.is_completedloaded =  true;
          }
          else if(res.status === 200 || res.status === '200')
          {
            var loaded_records = self.start+self.recordsPerPage;
            if(loaded_records >= res.total){
              self.isMoreRecordsCompleted = false;
            }

            self.completedComplaints = self.completedComplaints.concat(res.data);
            if(type === '0'){
              self.common.stopLoading();
            }
            else{
              if(type === '1'){
                self.scrollEvent.target.complete();
              }
            }
            this.completedData = self.completedComplaints;
            this.is_completedloaded =  false;
          }
        },
        (error) => {
          console.log(error);
        });
    }, 500);

  }

  openDialer(tel)
  {
    console.table(tel);
    if(tel)
      this.callNumber.callNumber(tel, true)
         .then(res => console.log('Launched dialer!', res))
         .catch(err => console.log('Error launching dialer', err));
  }

  
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
}
