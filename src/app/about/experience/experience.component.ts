import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  liArr = [
    {
      title: 'Propose Idea'
    },
    {
      title: 'Collect More Info about the project from Client'
    },
    {
      title: 'Do Some Planning'
    },
    {
      title: 'Executing the Whole Idea'
    },
    {
      title: 'Review & Get Feedback'
    },
    {
      title: 'Deliver'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
