import { Card } from "./card";

export class Lane{
  private type: string = '';
  private creaturesSide1: Card[] = [new Card('creature', 'magic', 2), new Card('creature', 'magic', 2), new Card('creature', 'magic', 2), new Card('creature', 'magic', 2), new Card('creature', 'magic', 2)];
  private effectsSide1: Card[] = [new Card(), new Card(), new Card(), new Card(), new Card()];
  private creaturesSide2: Card[] = [new Card(), new Card(), new Card(), new Card(), new Card()];
  private effectsSide2: Card[] = [new Card(), new Card(), new Card(), new Card(), new Card()];
  constructor(type: string) {
    this.type = type;
  }
  
}