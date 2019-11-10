import * as WebSocket from 'ws';
import { Field } from './field';
import { Card } from './card';
import { PlayerActionType } from '../Enumerations/PlayerActionType';
import { PlayerAction } from '../Interfaces/PlayerAction';

export class Game {
  public gameJoinable: boolean = true;
  private id: number;
  private players: WebSocket[] = [];
  private field: Field;
  constructor(laneLeft: string, laneRight: string) {
    this.field = new Field(laneLeft, laneRight);
    this.id = Date.now();
  }
  public addPlayer(newPlayer: WebSocket): boolean {
    if(this.players.length + 1 <= 2){
      this.players.push(newPlayer);
      if(this.players.length === 2) {
        this.peparePlayer();
        this.sendToAllPlayers('game', {type: 'field', field: this.field});
        this.sendToAllPlayers('game', {type: 'pre', gameStarted: true, message: 'Game started'});
        this.gameJoinable = false;
      }
    } else {
      newPlayer.send(JSON.stringify({type: 'game', data: 'Full!'}));
      return false;
    }
    return true;
  }
  private sendToAllPlayers(type: string, data: any) {
    this.players.forEach((player) => {
      player.send(JSON.stringify({type: type, data: data}));
    });
  }
  private peparePlayer(){
    this.players.forEach((player) => {
      player.on('message', (action: string) => {
        this.handleAction(JSON.parse(action));
        this.testSetField();
        this.sendToAllPlayers('game', {type: 'field', field: this.field});
      });
    });
  }
  private handleAction(action: PlayerAction) {
    if(action) {
      switch(action.type) {
        case PlayerActionType.SetEffect:
          console.log('Effect Set');
        break;
        case PlayerActionType.SetCreature:
          console.log('Creature Set');
        break;
        case PlayerActionType.ActivateCreature:
          console.log('Creature Activated')
        break;
        case PlayerActionType.ActivateEffect:
          console.log('Effect Activated');
        break;
      }
    }
  }
  private testSetField() {
    this.field.setEffectLeftLane(0, 1, new Card('effect', 'magic', 2));
    this.field.setEffectRightLane(0, 1, new Card('effect', 'magic', 2));
    this.field.setEffectLeftLane(0, 2, new Card('effect', 'magic', 2));
    this.field.setEffectRightLane(0, 2, new Card('effect', 'magic', 2));

    this.field.setCreatureLeftLane(0, 1, new Card('creature', 'magic', 2));
    this.field.setCreatureRightLane(0, 1, new Card('creature', 'magic', 2));
    this.field.setCreatureLeftLane(0, 2, new Card('creature', 'magic', 2));
    this.field.setCreatureRightLane(0, 2, new Card('creature', 'magic', 2));

    this.field.setCreatureLeftLane(2, 1, new Card('creature', 'magic', 2));
    this.field.setCreatureRightLane(4, 1, new Card('creature', 'magic', 2));
    this.field.setCreatureLeftLane(3, 2, new Card('creature', 'magic', 2));
    this.field.setCreatureRightLane(1, 2, new Card('creature', 'magic', 2));
  }
}

