import { Component, OnInit , ViewChild} from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import {Router } from '@angular/router';
import {ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
 @ViewChild(IonInfiniteScroll,{static:true}) infiniteScroll: IonInfiniteScroll;
  userId: any = localStorage.getItem('vwd_userid');
  chatLists: any;
  userData: any;
  is_loaded: boolean = false;

  constructor(
    public router: Router,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService
  ) { }

  ionViewWillEnter()
  {
    this.getPickupPersonChatsList();
    this.userData   = JSON.parse(localStorage.getItem('vwd_userData'));
  }

  ngOnInit() {}

  getPickupPersonChatsList(){

    this.api.post('getPickupPersonChatsList', {userId:this.userId },'')
    .subscribe(
      (result) => {
        const res: any = result;
        if(res.status === 422 || res.status === '422')
        {
          let errMsgs = '';
          for (const x of res.errors) {
            errMsgs += x +'</br>';
          }
          //this.common.presentToast(errMsgs,'danger');
          this.is_loaded =  true;
          this.chatLists = [];
        }
        else if(res.status === 200 || res.status === '200')
        {
          this.chatLists = res.data;
          this.is_loaded =  false;
        }
      },
      (error) => {
        console.log(error);
      });
  }


}
