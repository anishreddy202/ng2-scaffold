import { Injectable, EventEmitter }                 from '@angular/core';
import { Http, Headers, RequestOptions, Response }  from '@angular/http';


@Injectable()
export class LandingService {
	private _headers = new Headers({ 'Content-Type': 'application/json' });
	private _options = new RequestOptions({ headers: this._headers });
	public closeSubNavBar: EventEmitter<any> = new EventEmitter<any>();

  	constructor(private _http: Http) { }

  public getTestData() {
		return this._http.get('/assets/test.json');
	}

}
