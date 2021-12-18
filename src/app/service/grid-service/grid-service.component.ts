import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-service',
  templateUrl: './grid-service.component.html',
  styleUrls: ['./grid-service.component.css']
})
export class GridServiceComponent implements OnInit {
  isActive = false;
  serviceArr = [
    {
      title: 'Web Designing',
      desc: 'Design Websites in a Creative Way!',
      icon: 'assets/img/file-code-fill.svg',
      moreItem: [
        'Get Reusable Code',
        'Get the Production ready website before deadline',
        'First month maintenance free'
      ]
    },
    {
      title: 'CMS Services',
      desc: 'Manage Your Content With Wordpress, wix or Drupal',
      icon: 'assets/img/pc-display-horizontal.svg',
      moreItem: [
        'No extra cost needed to upload content',
        'Get SEO optimized site'
      ]
    },
    {
      title: 'BackEnd Liaising',
      desc: 'Clean , reusable code to develop functional polyglot',
      icon: 'assets/img/dpad-fill.svg',
      moreItem: [
        'Internal HTTP(S) and SSL proxy load balanced',
        'Any Backend issue solved With Modern Technology'
      ]
    },
    {
      title: 'Single Page Application',
      desc: 'Get SPA in Angular or React Js',
      icon: 'assets/img/tablet.svg',
      moreItem: [
        'Make site faster for better user experience',
        'Get well documented code'
      ]
    },
    {
      title: 'Database Scalability',
      desc: 'Improve its availability when the business demands more',
      icon: 'assets/img/stack.svg',
      moreItem: [
        'Will maintain your noSQL database to handle large amount of unstructured data',
        'If youve SQL one, will scale it'
      ]
    },
    {
      title: 'Content Upload',
      desc: 'Replace all dummy content with real one',
      icon: 'assets/img/body-text.svg',
      moreItem: [
        'Boost up your website existing content one more step',
        'Get copyright free, unique and quality Content',
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ClassActive(e: any){
    

    this.serviceArr.forEach((er, i)=>{
      if(e.srcElement.offsetParent.id == i){
        e.srcElement.offsetParent.classList.add('active')
        return
      }
    })
  }

  
  ClassNotActive(e: any){
    console.log(e.srcElement.offsetParent.offsetParent);

    for(let i = 0; i< this.serviceArr.length; i++){
      if(e.srcElement.offsetParent.offsetParent.id == i){
        e.srcElement.offsetParent.offsetParent.classList.remove('active');
        return
      }
    }
    
  }

}
