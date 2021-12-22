import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouthomeComponent } from './abouthome/abouthome.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {
    path:'', component: AbouthomeComponent,
    children: [
      {path: '', component: AboutmeComponent},
      {path: 'experience', component: ExperienceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
