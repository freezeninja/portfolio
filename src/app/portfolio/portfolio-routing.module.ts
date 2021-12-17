import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortMainComponent } from './port-main/port-main.component'

const routes: Routes = [
  {path: '', component: PortMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
