import { NgModule, ModuleWithProviders}   from '@angular/core';
import { Route, RouterModule }            from '@angular/router';
import { BrowserModule } 					  from '@angular/platform-browser';
import { FormsModule }      				from '@angular/forms';
import { LandingComponent }               from './landing.component';
import { BarComponent }                 from './bar.component';
import { ChartsModule } from 'ng2-charts';
import { LandingService }               from './landing.service';

// Setup routing
const routes: Route[] = [
  { path: '', pathMatch: 'full' , component: LandingComponent },
  { path: 'bar', pathMatch: 'full' , component: BarComponent }
];

@NgModule({

  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule,
    ChartsModule
  ],
  declarations: [
    LandingComponent,
    BarComponent
  ],
  providers:[
    LandingService
  ]
})

export class LandingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LandingModule
    };
  }
}
