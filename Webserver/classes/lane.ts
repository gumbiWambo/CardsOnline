import { Card } from "./card";

export class Lane{
  private type: string = '';
  private creaturesSide1: Card[] = [new Card(), new Card(), new Card(), new Card(), new Card()];
  private effectsSide1: Card[] = [new Card(), new Card(), new Card(), new Card(), new Card()];
  private creaturesSide2: Card[] = [new Card(), new Card(), new Card(), new Card(), new Card()];
  private effectsSide2: Card[] = [new Card(), new Card(), new Card(), new Card(), new Card()];
  constructor(type: string) {
    this.type = type;
  }
  public setCreature(slot: number, side: number, card: Card): boolean {
    if (card.type === 'creature' && slot <= 4) {
      if (side === 1) {
        return this.setSlot(this.creaturesSide1, slot, card);
      } else if (side === 2) {
        return this.setSlot(this.creaturesSide2, slot, card);
      }
    }
    return false;
  }
  public setEffect(slot: number, side: number, card: Card): boolean {
    if (card.type === 'effect' && slot <= 4) {
      if (side === 1) {
        return this.setSlot(this.effectsSide1, slot, card);
      } else if (side === 2) {
        return this.setSlot(this.effectsSide2, slot, card);
      }
    }
    return false;
  }
  private setSlot(array: Card[], slot: number, card: Card): boolean {
    if (array[slot].kind === null) {
      array[slot] = card;
      return true;
    }
    return false;
  }
  
}