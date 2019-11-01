import { Card } from "./card";

export class Lane{
  private type: string = '';
  private creatures: Card[] = [];
  private effects: Card[] = [];
  constructor(type: string) {
    this.type = type;
  }
  
}