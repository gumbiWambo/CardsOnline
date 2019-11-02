import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import { Game } from './classes/game';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});
let data: any[] = [];
let game: Game;
let gameList: Game[] = [];
wss.on('connection', (ws: WebSocket) => {
    if(!game){
        game = new Game('machine', 'magic');
    }
    if(!game.addPlayer(ws) || gameList.length > 0) {
      gameList.push(game);
      if(gameList.length !== 1){
        game = new Game('machine', 'babarian');
      }
    }
ws.on('message', (message: string) => {
    data.push(JSON.parse(message));
 })
 ws.send(JSON.stringify({author: 'Server', message: 'connected'}));
});

server.listen(1337, 'fabiangumbrecht', () => {
    console.log(`Server started on port ${JSON.stringify(server.address())}`);
});
