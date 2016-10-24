import { Component } from '@angular/core';

declare var $:any;
require("../assets/main.scss");

@Component({
    selector: 'app',
    template: `
      <navbar></navbar>
      <router-outlet></router-outlet>
      <footer></footer>
    `,
})
export class AppComponent {
  public title = 'ThingSpace';

  constructor(){}

}
