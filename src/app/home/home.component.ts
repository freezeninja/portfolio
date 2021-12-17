import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: any;
  textArr= ['Developer', 'Gamer', 'Content Creator', 'Solo Traveller', 'MEMEholic'];
  Count = 0;
  changText = 'Developer';

  changingSlide(){
    this.changText = this.textArr[this.Count];
    this.Count++

    if(this.Count > 4){
      this.Count = 0;
    }
  }


  constructor() { }

  ngOnInit(): void {
    this.changingSlide();
    this.id = setInterval(()=>{
      this.changingSlide();
    }, 2000)
  }

  ngOnDestroy(){
    if(this.id){
      clearInterval(this.id)
    }
  }
}
