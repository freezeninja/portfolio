import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-service',
  templateUrl: './grid-service.component.html',
  styleUrls: ['./grid-service.component.css']
})
export class GridServiceComponent implements OnInit {
  serviceArr = [
    {
      title: 'Web Designing',
      desc: 'Design Websites in a Creative Way!',
      icon: 'assets/img/file-code-fill.svg'
    },
    {
      title: 'CMS Services',
      desc: 'Manage Your Content With Wordpress, wix or Drupal',
      icon: 'assets/img/pc-display-horizontal.svg'
    },
    {
      title: 'BackEnd Liaising',
      desc: 'Clean , reusable code to develop functional polyglot',
      icon: 'assets/img/dpad-fill.svg'
    },
    {
      title: 'Single Page Application',
      desc: 'Get SPA in Angular or React Js',
      icon: 'assets/img/tablet.svg'
    },
    {
      title: 'Database Scalability',
      desc: 'Improve its availability when the business demands more',
      icon: 'assets/img/stack.svg'
    },
    {
      title: 'Content Upload',
      desc: 'Replace all dummy content with real one',
      icon: 'assets/img/body-text.svg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
