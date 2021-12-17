import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-skills',
  templateUrl: './current-skills.component.html',
  styleUrls: ['./current-skills.component.css']
})
export class CurrentSkillsComponent implements OnInit {

  currentSkills = [
    {
      tech: 'HTML',
      percent: 'width: 95%;',
      value: 95,
      class: 'progress-bar bg-success'
    },
    {
      tech: 'CSS',
      percent: 'width: 90%;',
      value: 90,
      class: 'progress-bar bg-warning'
    },
    {
      tech: 'JavaScript',
      percent: 'width: 85%;',
      value: 85,
      class: 'progress-bar bg-info'
    },
    {
      tech: 'Angular 2+',
      percent: 'width: 60%;',
      value: 60,
      class: 'progress-bar bg-warning'
    },
    {
      tech: 'React Js',
      percent: 'width: 30%;',
      value: 30,
      class: 'progress-bar bg-danger'
    },
    {
      tech: 'Git',
      percent: 'width: 90%;',
      value: 90,
      class: 'progress-bar bg-info'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
