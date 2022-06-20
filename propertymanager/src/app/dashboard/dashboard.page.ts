import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {Router } from '@angular/router';
import {ApiService } from '../services/api/api.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userId: any = localStorage.getItem('vwd_userid');
  currentDashboardView: any = localStorage.getItem('vwd_dashboard_view') == '' ? 'week' : localStorage.getItem('vwd_dashboard_view');
  userData : any;
  myComplaints: any;
  myComplaintsData: any;
  otherComplaints: any;
  dashboardData: any;
  SortByValue : string;
  customAlertOptions: any = {
    header: ' Sort By',
    translucent: true
  };
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Pending', 'Completed' ];
  public pieChartData: SingleDataSet = [0,0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public barChartLabels: Label[] = ['2013', '2014', '2015', '2016', '2017', '2018', '2019' , '2020' , '2021','2022'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [{ 
    data: [], label: 'My Complaints' 
  }];

  public barChartColors: Color[] = [{
      backgroundColor:["#a80b0c" , "#a80b0c" , "#a80b0c" , "#a80b0c" , "#a80b0c","#a80b0c", "#a80b0c" , "#a80b0c" , "#a80b0c" , "#a80b0c","#a80b0c", "#a80b0c" , "#a80b0c" , "#a80b0c" , "#a80b0c","#a80b0c"] 
  }];

  public pieChartColors: Color[] = [{
    backgroundColor:["#a80b0c" , "#152e68" ] 
  }];

  constructor(
    public router: Router,
    private common: CommonService,
    public api: ApiService,
  ) {
    this.SortByValue = this.currentDashboardView ; 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.myComplaints = 0;
    this.otherComplaints = 0;
  }

  ionViewWillEnter(){
    this.userData   = JSON.parse(localStorage.getItem('vwd_userData'));
    this.getDashboardData(this.currentDashboardView);
  }

  ngOnInit() {}

  getDashboardData(requestedtype = '')
  {
    this.common.presentLoading();
    let selectedValue = requestedtype == '' ? 'week' : requestedtype;
    this.api.post('getDashboardDataPropertyManager', {userId:this.userId ,community:this.userData.community,requestedtype: selectedValue},'')
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
            this.dashboardData = [];
          }
          else if(res.status === 200 || res.status === '200')
          {
            
            this.dashboardData = res.data;
            this.myComplaints = res.mycomplaintscount;
            this.otherComplaints = res.complaintsCount;
            this.myComplaintsData = res.data.myComplaintsData;
            this.barChartLabels = res.data.mycomplaintsLabel;
            this.barChartData = [{ 
                                  data: res.data.mycomplaintsValue, label: 'My Complaints' 
                                }];
            this.pieChartData = [res.data.pendingComplaints, res.data.completedComplaints];                 
           
          }
        },
      (error) => {
         this.common.stopLoading();
          console.log(error);
      });
  }

  UpdateSelctedData(selectedValue)
  {
    this.getDashboardData(selectedValue);
    localStorage.setItem('vwd_dashboard_view',selectedValue);
  }
}
