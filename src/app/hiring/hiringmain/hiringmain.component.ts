import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiringmain',
  templateUrl: './hiringmain.component.html',
  styleUrls: ['./hiringmain.component.css']
})
export class HiringmainComponent implements OnInit {

  IsDisplayed = false;
  succesText = '';

  price:number = 10000;

  Fname: string = '';
  Lname: string = '';
  Hemail: string = '';
  Hnum: string = '';
  isChecked: boolean = false;
  purpose: string = 'Buisness Purpose';
  tech: string = 'Discuss on Call';


  firstNameMsg = '';
  LastNameMsg = '';
  EmailMsg = '';
  NumberMsg = '';
  CheckedMsg = '';
  toptext = '';


  constructor() { }

  ngOnInit(): void {
  }

  onPriceChange(e: any){
    let val = e.target.value;
    this.price = val;
  }

  hireFSubmit(e: any){
    e.preventDefault();

     // validation regex
     let NumberValid = /[0-9]{10}/;
     let nameValid = /^[A-Za-z. ]{3,15}$/;
     let emailValid = /^([0-9a-zA-z\.\-\_]+)@([a-zA-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
 
 
   if(this.Fname == '' || this.Lname == ''|| this.Hnum == '' || this.Hemail == ''){
    this.toptext = '*Field(s) cant be blank!'
    return
   }
   this.toptext = '';

   if(!nameValid.test(this.Fname)){
     this.firstNameMsg = '*Should be 3 - 15 characters long!'
     return
   }
   this.firstNameMsg = '';

   if(!nameValid.test(this.Lname)){
     this.LastNameMsg = '*Should be 3 - 15 characters long!'
     return
   }
   this.LastNameMsg = '';

   if(!emailValid.test(this.Hemail)){
     this.EmailMsg = "*Email must contains atleast one '@' and one ' . ' ";
     return
   }
   this.EmailMsg = '';

   if(!NumberValid.test(this.Hnum)){
     this.NumberMsg = '*Phone number must be 10 digit long';
     return
   }
   this.NumberMsg = '';

   if(!this.isChecked){
     this.CheckedMsg = '*Kindly Click on the Checkbox'
     return
   }
   this.CheckedMsg = '';


   this.IsDisplayed = true;
   this.succesText = 'I will get back to you soon, Be patient.'


      
      
  }
}
