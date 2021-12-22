import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.css']
})
export class ContactMainComponent implements OnInit {

  email: any;
  name: any;
  number: any;

  toptext = '';
  SuccesText = '';
  nameMsg = '';
  mailMsg = '';
  numMsg = '';

  // assigning the array of type any ; otherwise by default it takes the 'never' type 
  DataArr: any[] = [];
  // anoyher way  : 
  //  DataArr = [] as any


  @Output() data: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onInput(e: any) {
    e.preventDefault();

    let LocalId = localStorage.getItem('value');
    if(LocalId !== null){
      this.SuccesText = 'You already submitted the from';
      return
    }

    this.SuccesText = '';

    let Name = this.name,
      Email = this.email,
      Number = this.number;

    // validation regex
    let NumberValid = /[0-9]{10}/;
    let nameValid = /^[A-Za-z. ]{3,20}$/;
    let emailValid = /^([0-9a-zA-z\.\-\_]+)@([a-zA-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    // /^[0-9A-za-z._-]{1,}@[A-Za-z-_]{1,}[.]{1}[a-zA-z]{2,6}$/i

    if ((Name == "" || Name == undefined) || (Email == "" || Email == undefined) || (Number == "" || Number == undefined)) {
      this.toptext = 'Field(s) cant be empty!';
      return
    }
    this.toptext = ''

    if (!nameValid.test(Name)) {
      this.nameMsg = 'Name must be more than 3 character';
      return
    } else {
      this.nameMsg = '';
    }

    if (!NumberValid.test(Number)) {
      this.numMsg = 'Phone number must be 10 digit long';
      return
    } else {
      this.numMsg = '';
    }

    if (!emailValid.test(Email)) {
      this.mailMsg = "Email must contains atleast one '@' and one ' . ' ";
      return
    } else {
      this.mailMsg = ''
    }


    if (LocalId === null) {
      // gettinf valid data 
      let data: any = {
        name: Name,
        email: Email,
        number: Number
      }
      this.DataArr.push(data)
      console.log(this.DataArr);

      this.SuccesText = 'From Submitted';

      this.data.emit(this.DataArr);
    }

    // adding value in localStorage to know if user already submitted the form or not  
    localStorage.setItem('value', 'fromAdded')

  }

}
