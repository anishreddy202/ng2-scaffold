import { Component } from '@angular/core';

require("../assets/main.scss");

@Component({
    selector: 'app',
    template: `
      <router-outlet></router-outlet>
    `,
})
export class AppComponent {
  public title = 'ThingSpace';

  constructor(){}

}
