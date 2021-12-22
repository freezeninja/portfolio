import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TcMainComponent } from '../tc-main/tc-main.component';

const routes: Routes = [
  {path: '', component: TcMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TAndcRoutingModule { }
