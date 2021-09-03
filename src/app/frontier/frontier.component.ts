import { Component, OnInit} from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-frontier',
  templateUrl: './frontier.component.html',
  styleUrls: ['./frontier.component.css']
})
export class FrontierComponent implements OnInit {

  public pieChartOptions: ChartOptions = {

    legend : {
      display:true,
      position:'right'
    },

    responsive: true,

  };

  public pieChartLabels: Label[] = [['not started'], ['in progress'], 

  ['Approved'],['Auto Approved']];
  public pieChartData: SingleDataSet = [100, 0, 0,0];

  public pieChartType: ChartType = 'pie';

  public pieChartLegend = true;

  public pieChartPlugins = [];

  constructor() { 
    monkeyPatchChartJsTooltip();

    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
  }

}

