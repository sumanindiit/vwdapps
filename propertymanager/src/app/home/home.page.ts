import { Component, OnInit,ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import {Router } from '@angular/router';
import {ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll,{static:true}) infiniteScroll: IonInfiniteScroll;
  pageData: any;
  userId: any = localStorage.getItem('vwd_userid');
  is_loaded: boolean = false;
  start: any;
  isMoreRecords: boolean = true;
  scrollEvent: any;
  recordsPerPage: any;
  allComplaints: any;
  searchQuery: any;

  hideMe=false;
  toggleClass(){
    this.hideMe=!this.hideMe;
  }

  constructor(
    public router: Router,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService
  ) { 
    this.recordsPerPage = 8;
  }

  ionViewWillEnter(){
    this.start = 0;
  	this.allComplaints = [];
    this.getComplaints({},'0');
  }

  filterComplaints(event)
  {
    this.searchQuery = event.srcElement.value;

    this.allComplaints = [];
    this.pageData = [];
    this.getComplaints({},'0',this.searchQuery);

  }

  ngOnInit() {}

  getComplaints(event={},type='', searchItem = ''){
  	if(type === '0' ){}
    else{
      this.scrollEvent = event;
      if(type === '1' ){
        this.start = this.start + this.recordsPerPage;
      }
    }
    var self = this;
 
    setTimeout(() => {
      self.api.post('getComplaints', {userId:this.userId, recordsPerPage: self.recordsPerPage, start: self.start, search: searchItem },'')
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
            this.pageData = [];
            //self.common.presentToast(errMsgs,'danger');
            self.is_loaded =  true;
          }
          else if(res.status === 200 || res.status === '200')
          {
            var loaded_records = self.start+self.recordsPerPage;
            if(loaded_records >= res.total){
              self.isMoreRecords = false;
            }

            self.allComplaints = self.allComplaints.concat(res.data);
            if(type === '0'){
              self.common.stopLoading();
            }
            else{
              if(type === '1'){
                self.scrollEvent.target.complete();
              }
            }
            this.pageData = self.allComplaints;
            this.is_loaded =  false;
          }
        },
        (error) => {
          console.log(error);
        });
    }, 500);
  }

}
