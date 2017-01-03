import { Component, OnInit } from '@angular/core';
import { QueryService } from './query.service';
import { PivotPoint } from './pivot-point';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  providers: [QueryService]
})
export class LineChartComponent implements OnInit {

  public type: string = "line";
  public legend: boolean = true;
  public options: any = {
    animation: false,
    responsive: true
  };
  public labels: Array<string> = [];
  public datasets: Array<Canvas> = [
    new Canvas("消耗消息数"),
    new Canvas("产生消息数")
  ];
  public colors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];

  constructor(private query: QueryService) { }

  ngOnInit() {
    this.refresh();
  }

  public refresh(): void {
    let samp = 10;
    let internal = 1;
    let tsmp = Date.now() - samp * internal * 60 * 1000 - 15 * 60 * 1000;
    // this.query.getStatistics(tsmp, samp, internal).subscribe(points => this.update(points));
    this.query.getStatisticsLocal().subscribe(points => this.update(points));
  }

  public update(pivotPoints: PivotPoint[]):void {
    this.labels = [];
    this.datasets[0].data = [];
    this.datasets[1].data = [];

    for (let point of pivotPoints) {
      this.labels.push(point.label);
      this.datasets[0].data.push(point.consume);
      this.datasets[1].data.push(point.produce);
    }
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}

export class Canvas {
  data: Array<number>;
  label: string;
  constructor(label_: string) {
    this.label = label_;
    this.data = [];
  }
}
