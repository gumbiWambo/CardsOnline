import * as WebSocket from 'ws';
import { Field } from './field';

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
      player.on('message', (action) => {
        console.log(action);
      });
    });
  }
}
