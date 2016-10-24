import { NgModule }         from '@angular/core';
import { BrowserModule  }   from '@angular/platform-browser';
import { Route, RouterModule }     from '@angular/router';
import { FormsModule }      from '@angular/forms';
import { HttpModule}        from '@angular/http';
import { LandingModule }    from './landing/index';

import { NavBarComponent }  from './shared/navbar/navbar.component';
import { FooterComponent }  from './shared/footer/footer.component';

import { AppComponent }     from './app.component';


// Setup routing
export const routes: Route[] = [
  { path: '**', redirectTo: '' },
  
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      BrowserModule,
      FormsModule,
      HttpModule,
      LandingModule,
    ],
    declarations: [
      AppComponent,
      NavBarComponent,
      FooterComponent,
    ],
    providers: [
    ],
    bootstrap: [  AppComponent ],
})
export class AppModule {}
