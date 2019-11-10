import { PlayerActionType } from "../Enumerations/PlayerActionType";

export interface PlayerAction {
  type: PlayerActionType;
  data: any;
}