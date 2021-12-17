import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceMainComponent } from './service-main/service-main.component';
import { GridServiceComponent } from './grid-service/grid-service.component';


@NgModule({
  declarations: [
    ServiceMainComponent,
    GridServiceComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
