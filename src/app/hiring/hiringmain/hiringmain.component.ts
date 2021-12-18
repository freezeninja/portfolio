import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiringmain',
  templateUrl: './hiringmain.component.html',
  styleUrls: ['./hiringmain.component.css']
})
export class HiringmainComponent implements OnInit {

  price:number = 1000;

  constructor() { }

  ngOnInit(): void {
  }

  onPriceChange(e: any){
    let val = e.target.value;
    this.price = val;
    console.log(this.price);
    
  }
}
