import { Component, OnInit }    from '@angular/core';
import { Router, Event, NavigationEnd }  from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})
export class NavBarComponent implements OnInit {

  constructor(private _router: Router) {
    this._router.events.subscribe((event:NavigationEnd) => {
      window.scroll(0,0);
    });
  }

  ngOnInit() {
    window.scroll(0,0);
  }

}
