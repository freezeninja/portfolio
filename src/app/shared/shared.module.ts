import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromhomeComponent } from './fromhome/fromhome.component';



@NgModule({
  declarations: [
    FromhomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FromhomeComponent]
})
export class SharedModule { }
