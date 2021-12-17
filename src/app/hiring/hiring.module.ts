import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiringRoutingModule } from './hiring-routing.module';
import { HiringmainComponent } from './hiringmain/hiringmain.component';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HiringmainComponent
  ],
  imports: [
    CommonModule,
    HiringRoutingModule,
    SharedModule
  ]
})
export class HiringModule { }
