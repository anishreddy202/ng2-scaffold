import { Component, OnInit } from '@angular/core';
import { Http }  from '@angular/http';
import '../../../node_modules/chart.js/src/chart.js';

@Component({
  selector: 'login',
  templateUrl: 'landing.component.html',
})
export class LandingComponent implements OnInit {
  name: string;
  message: string;
  table1Data: any = [];
  statistics: boolean = false;
  showData: boolean = false;

  constructor(private _http: Http) {

  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: false
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public open() {
    console.log('dblclick');
    this.showData = true
  }

  public showStats() {
    if(this.statistics)
      this.statistics = false;
    else {
      this.statistics = true;
    }
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  ngOnInit() {
    this._http.get('/assets/test.json').subscribe((res: any) => {
      var response = res.json();
      console.log(response);
      this.table1Data = response;
      // this.name = response.data.name;
      // this.message = response.data.message;
        // this.dataContainer.nativeElement.innerHTML = response;
    });
  }
}
