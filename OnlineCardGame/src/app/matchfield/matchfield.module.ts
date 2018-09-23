import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchfieldComponent } from './matchfield/matchfield.component';
import { LaneComponent } from './lane/lane.component';
import { CardSlotComponent } from './card-slot/card-slot.component';
import { GraveyardComponent } from './graveyard/graveyard.component';
import { HeroSlotComponent } from './hero-slot/hero-slot.component';
import { HandCardComponent } from './hand-card/hand-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MatchfieldComponent, LaneComponent, CardSlotComponent, GraveyardComponent, HeroSlotComponent, HandCardComponent],
  exports: [MatchfieldComponent, LaneComponent, CardSlotComponent, GraveyardComponent, HeroSlotComponent, HandCardComponent]
})
export class MatchfieldModule { }
