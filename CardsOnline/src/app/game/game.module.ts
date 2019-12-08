import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandComponent } from './hand/hand.component';
import { FieldComponent } from './field/field.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [HandComponent, FieldComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FieldComponent
  ]
})
export class GameModule { }
