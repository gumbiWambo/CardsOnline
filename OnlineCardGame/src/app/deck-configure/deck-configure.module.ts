import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckConfigureComponent } from './deck-configure/deck-configure.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeckConfigureComponent],
  exports: [DeckConfigureComponent]
})
export class DeckConfigureModule { }
