import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouthomeComponent } from './abouthome/abouthome.component';

const routes: Routes = [
  {path:'', component: AbouthomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
