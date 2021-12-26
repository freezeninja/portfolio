import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TAndcRoutingModule } from './t-andc-routing.module';
import { TcMainComponent } from '../tc-main/tc-main.component'


@NgModule({
  declarations: [
    TcMainComponent 
  ],
  imports: [
    CommonModule,
    TAndcRoutingModule
  ]
})
export class TAndcModule { }
