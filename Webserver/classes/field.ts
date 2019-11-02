import { Lane } from "./lane";
import { Card } from "./card";

export class Field{
  public leftLane: Lane;
  public rightLane: Lane;
  constructor(laneTypeLeft: string, laneTypeRight: string) {
    this.leftLane = new Lane(laneTypeLeft);
    this.rightLane = new Lane(laneTypeRight);
  }
  
  public setEffectLeftLane(slot: number, side: number, card: Card) {
    this.leftLane.setEffect(slot, side, card);
  }
  public setEffectRightLane(slot: number, side: number, card: Card) {
    this.rightLane.setEffect(slot, side, card);
  }
  public setCreatureLeftLane(slot: number, side: number, card: Card) {
    this.leftLane.setCreature(slot, side, card);
  }
  public setCreatureRightLane(slot: number, side: number, card: Card) {
    this.rightLane.setCreature(slot, side, card);
  }
}