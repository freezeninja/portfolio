import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiringRoutingModule } from './hiring-routing.module';
import { HiringmainComponent } from './hiringmain/hiringmain.component';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HiringmainComponent
  ],
  imports: [
    CommonModule,
    HiringRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HiringModule { }
