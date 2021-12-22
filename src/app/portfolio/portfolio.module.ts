import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortMainComponent } from './port-main/port-main.component';
import { FilterPipe } from '../pipes/filter.pipe';



@NgModule({
  declarations: [
    PortMainComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  exports: []
})
export class PortfolioModule { }
