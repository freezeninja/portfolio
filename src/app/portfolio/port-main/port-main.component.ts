import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-port-main',
  templateUrl: './port-main.component.html',
  styleUrls: ['./port-main.component.css']
})
export class PortMainComponent implements OnInit {
  ValueText: any = 'all';
  displayDate: any;
  CardsNum = 11;

  LargeimageURL = '';

  IsDisplayed = false;

  CurrentDate: any = new Date("20 dec 2021").getTime()/ 1000;
  futureDate:any = new Date().getTime()/1000;
  getDate(){
    let b = this.futureDate - this.CurrentDate;
    let c = Math.floor(b/60/60/24);
    // console.log(c);
    this.displayDate = c;
  }  

  optionClick(e: any){
    let v = e.target.value;
    this.ValueText = v;

    setTimeout(() => {   
      let Cards = document.querySelectorAll('.card');
      this.CardsNum = Cards.length;
    }, 10);
  }

  PortfolioArray = [
    {
      title: 'Logibook(old)',
      url: 'assets/img/logibbokOrange.png',
      desc: 'Single Page Logistic Website.',
      category: 'bootstrap'
    },
    {
      title: 'Logibook(New)',
      url: 'assets/img/logibookBlue.png',
      desc: 'Client wanted to redesign the whole site with a new look.',
      category: 'bootstrap'
    },
    {
      title: 'Fashion Ecommerce',
      url: 'assets/img/portEcomerce.png',
      desc: 'Created this clothes shop just for practicing purpose.',
      category: 'bootstrap'
    },
    {
      title: 'AC Store',
      url: 'assets/img/electrico.png',
      desc: 'An ecommerce website for selling air conditioners. Whole site, every single page made by me from scratch',
      category: 'bootstrap'
    },
    {
      title: 'Login - Signup',
      url: 'assets/img/wlogin.png',
      desc: 'These page made without any external library and have some animation.',
      category: 'WEXL'
    },
    {
      title: 'Telecom Site',
      url: 'assets/img/wtelenor.png',
      desc: 'This site was made for a Norway Client.',
      category: 'WEXL'
    },
    {
      title: 'Weather App',
      url: 'assets/img/wweather.png',
      desc: 'Fetch data from openweather.com and displayed.',
      category: 'VJS'
    },
    {
      title: 'Telenor Product',
      url: 'assets/img/wtproduct.png',
      desc: 'Product Details Page of Telenor Website.',
      category: 'WEXL'
    },
    {
      title: 'Password Generator',
      url: 'assets/img/passGen.png',
      desc: 'Generate a strong password and use it.',
      category: 'angular'
    },
    {
      title: 'Todo List',
      url: 'assets/img/todo.png',
      desc: 'Add your ToDo list items and track your incomplete task.',
      category: 'VJS'
    },
    {
      title: 'Image Search',
      url: 'assets/img/simage.png',
      desc: 'Search images with the help of Unsplash API, Day - Night toggle botton present.',
      category: 'VJS'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.getDate()
  }

  imgCross(){
    this.IsDisplayed = false;
  }

  openPop(e: any){
    this.IsDisplayed = true;
    // console.log(e.srcElement.src);
    this.LargeimageURL = e.srcElement.src;
  }


}
