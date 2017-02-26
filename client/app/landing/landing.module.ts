import { NgModule, ModuleWithProviders}   from '@angular/core';
import { Route, RouterModule }            from '@angular/router';
import { LandingComponent }               from './landing.component';
import { BarComponent }                 from './bar.component';
import { ChartsModule } from 'ng2-charts';

// Setup routing
const routes: Route[] = [
  { path: '', pathMatch: 'full' , component: LandingComponent },
  { path: 'bar', pathMatch: 'full' , component: BarComponent }
];

@NgModule({

  imports: [
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [
    LandingComponent,
    BarComponent
  ]
})

export class LandingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LandingModule
    };
  }
}
