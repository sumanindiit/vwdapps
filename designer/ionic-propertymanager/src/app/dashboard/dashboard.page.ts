import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {  Color, SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
	  SortByValue : string ;
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
    public pieChartLabels: Label[] = ['Pending', 'Completed' ,'In Progress'];
  public pieChartData: SingleDataSet = [300, 500, 200];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public barChartLabels: Label[] = ['2013', '2014', '2015', '2016', '2017', '2018', '2019' , '2020' , '2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Complaints' },
  ];
 public barChartColors: Color[] = [
    {
     
    backgroundColor:["#a80b0c" , "#a80b0c" , "#a80b0c" , "#a80b0c" , "#a80b0c","#a80b0c"] 
    },
  ];
   public pieChartColors: Color[] = [
    {
     
    backgroundColor:["#a80b0c" , "#152e68", "#4563a8" ] 
    },
  ];
  constructor() {this.SortByValue = "sort1" ; 
   monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }
}
