import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { WorkComponent } from "../../components/work/work.component";
import { PulitoComponent } from "../../components/work/pulito/pulito.component";
import { CohortComponent } from '../../components/work/cohort/cohort.component';


const routes: Routes = [
  {path: '', component: WorkComponent},
  { path: 'pulito', component: PulitoComponent },
  { path: 'cohort', component: CohortComponent }
]


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class WorkRoutingModule { }
