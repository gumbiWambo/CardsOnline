import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck/deck.component';
import { ShowCardComponent } from './show-card/show-card.component';



@NgModule({
  declarations: [DeckComponent, ShowCardComponent],
  imports: [
    CommonModule
  ],
  exports: [DeckComponent]
})
export class DeckModule { }
