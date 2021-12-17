import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsMainComponent } from './skills-main/skills-main.component';
import { CurrentSkillsComponent } from './current-skills/current-skills.component';
import { LearnSkillComponent } from './learn-skill/learn-skill.component';


@NgModule({
  declarations: [
    SkillsMainComponent,
    CurrentSkillsComponent,
    LearnSkillComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
