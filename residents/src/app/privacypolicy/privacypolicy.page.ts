import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.page.html',
  styleUrls: ['./privacypolicy.page.scss'],
})
export class PrivacypolicyPage implements OnInit {
  pageData : any;

  constructor(
    public router:Router,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api:ApiService,
  ) { }

  ngOnInit() {
    this.getPageData();
  }

  getPageData()
  {
   
    this.api.post('getPageData', {pageSlug: 'privacy_policy'},'')
      .subscribe(
        (result) => {
          this.common.stopLoading();
          let res: any;
          res = result;
          if(res.status == 422 )
          {
            var errMsgs = '';
            for (var i = 0; i < res.errors.length; i++){
              var obj = res.errors[i];
              errMsgs += obj +'</br>';
            }
            this.common.presentToast(errMsgs,'danger');
          }
          else if(res.status == 200)
          {
            this.pageData = res.data;
          }
        },
        (error) => {
          console.log(error);
        });
  }

}
