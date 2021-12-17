import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringmainComponent } from './hiringmain/hiringmain.component';

const routes: Routes = [
  {path: '', component: HiringmainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HiringRoutingModule { }
