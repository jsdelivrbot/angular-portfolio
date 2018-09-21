import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from '../../components/home/home.component';

import { AboutComponent } from '../../components/about/about.component';
import { FourohfourComponent } from "../../components/fourohfour/fourohfour.component";
import { WorkModule } from '../work/work.module';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  { path: "", component: AboutComponent },
  { path: "projects", loadChildren: "../work/work.module#WorkModule"},
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  { path: "**", component: FourohfourComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
