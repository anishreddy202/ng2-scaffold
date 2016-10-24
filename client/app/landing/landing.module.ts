import { NgModule, ModuleWithProviders}   from '@angular/core';
import { Route, RouterModule }            from '@angular/router';
import { LandingComponent }               from './landing.component';

// Setup routing
const routes: Route[] = [
  { path: '', pathMatch: 'full' , component: LandingComponent }
];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],

  declarations: [
    LandingComponent
  ]
})

export class LandingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LandingModule
    };
  }
}
