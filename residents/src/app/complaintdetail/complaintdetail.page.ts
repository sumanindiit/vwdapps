import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-complaintdetail',
  templateUrl: './complaintdetail.page.html',
  styleUrls: ['./complaintdetail.page.scss'],
})
export class ComplaintdetailPage implements OnInit {
  pageData: any;
  complaintId: any;

  constructor(
    route: ActivatedRoute,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService,
    ) {
      this.complaintId = route.snapshot.paramMap.get('complaintId');
    }

  ionViewWillEnter(){
    this.getPageData();
  }

  ngOnInit() {}

  getPageData()
  {
    this.api.post('getComplaintDetail', {complaintId:this.complaintId },'')
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
            this.common.presentToast(errMsgs,'danger');
          }
          else if(res.status === 200 || res.status === '200')
          {
            this.pageData = res.data ;
            console.log(this.pageData);
          }
        },
        (error) => {
          console.log(error);
        });
  }

}
