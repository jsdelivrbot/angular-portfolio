import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkComponent } from "../../components/work/work.component";
import { WorkRoutingModule } from "../work-routing/work-routing.module";

import { PulitoComponent } from "../../components/work/pulito/pulito.component";
import { CohortComponent } from '../../components/work/cohort/cohort.component';

@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule
  ],
  declarations: [
    WorkComponent,
    PulitoComponent,
    CohortComponent
  ]
})
export class WorkModule { }
