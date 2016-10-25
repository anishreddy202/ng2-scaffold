import { Component, OnInit } from '@angular/core';
import { Http }  from '@angular/http';

@Component({
  selector: 'landing',
  templateUrl: 'landing.component.html',
})
export class LandingComponent implements OnInit {
  name: string;
  message: string;

  constructor(private _http: Http) { }

  ngOnInit() {
    this._http.get('/ui/api/home').subscribe((res: any) => {
	  var response = res.json();
	  this.name = response.data.name;
	  this.message = response.data.message;
	    // this.dataContainer.nativeElement.innerHTML = response;
	});
  }
}