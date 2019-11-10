import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { environment } from 'src/environments/environment.prod';
import { filter, map, pluck } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private game = new BehaviorSubject<any>(null);
  public gameStarted = new BehaviorSubject<boolean>(false);
  public gameField = new BehaviorSubject<any>(null);
  constructor(private webSocket: WebsocketService) {
    this.game = this.webSocket.connect(environment.webSocketAddress)
    this.game.pipe(
      filter(x => x !== null),
      filter((data: MessageEvent) => !! data.data),
      pluck('data'),
      map(x => JSON.parse(x)),
      filter(x => x.hasOwnProperty('type')),
      filter(x => x.type === 'game'),
      pluck('data'),
      filter(value => value.type === 'pre')
    ).subscribe(next => {
       this.gameStarted.next(next.gameStarted);
    });
    this.game.pipe(
      filter(x => x !== null),
      filter((data: MessageEvent) => !! data.data),
      pluck('data'),
      map(x => JSON.parse(x)),
      filter(x => x.hasOwnProperty('type')),
      filter(x => x.type === 'game'),
      pluck('data'),
      filter(value => value.type === 'field'),
      pluck('field')
    ).subscribe((next) => {
      this.gameField.next(next);
    })
  }
  sendAction(type: number, data: any) {
    this.game.next({type, data});
  }
}
