import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-down',
  templateUrl: './sidebar-down.component.html',
  styleUrls: ['./sidebar-down.component.css']
})
export class SidebarDownComponent implements OnInit {
  GetInTouch = [
    {
      icon: 'assets/img/geo-alt-fill.svg',
      text: 'Kharagpur, West Bengal , India, 721140'
    },
    {
      icon: 'assets/img/telephone-forward-fill.svg',
      text: '+91 62971 36749'
    },
    {
      icon: 'assets/img/envelope-open-fill.svg',
      text: 'freeezeninja@gmail.com'
    }
  ]

  socialLogo = [
    {
      Icon: 'assets/img/facebook.png',
      link: 'https://www.facebook.com/profile.php?id=100004448536313'
    },
    {
      Icon: 'assets/img/instagram.png',
      link: 'https://www.instagram.com/_peep_senpai'
    },
    {
      Icon: 'assets/img/linkedin.png',
      link: 'https://www.linkedin.com/in/arijit-maiti-30b10720b/'
    },
    {
      Icon: 'assets/img/stack-overflow.png',
      link: 'https://stackoverflow.com/users/17076141/arijit-maiti'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
