import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'about', loadChildren: ()=> import('./about/about.module').then((res)=>res.AboutModule)},
  {path: 'portfolio', loadChildren: ()=> import('./portfolio/portfolio.module').then((res)=>res.PortfolioModule)},
  {path: 'skills', loadChildren: ()=> import('./skills/skills.module').then((res)=>res.SkillsModule)},
  {path: 'hire', loadChildren: ()=> import('./hiring/hiring.module').then((res)=>res.HiringModule)},
  {path: 'services', loadChildren: ()=>import('./service/service.module').then((res)=>res.ServiceModule)},
  {path: 'contact', loadChildren: ()=>import('./contact/contact.module').then((res)=>res.ContactModule)},
  {path: 'termsconditions', loadChildren: ()=>import('./tc/t-andc/t-andc.module').then((res)=>res.TAndcModule)},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
