import { Lane } from "./lane";

export class Field{
  public leftLane: Lane;
  public rightLane: Lane;
  constructor(laneTypeLeft: string, laneTypeRight: string) {
    this.leftLane = new Lane(laneTypeLeft);
    this.rightLane = new Lane(laneTypeRight);
  }
}