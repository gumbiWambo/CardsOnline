import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import { Game } from './classes/game';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});
let playerAmount = 0;
let data: any[] = [];
let game: Game;
wss.on('connection', (ws: WebSocket) => {
    if(!game){
        game = new Game('magic', 'biot');
    }
    game.addPlayer(ws);
ws.on('message', (message: string) => {
    data.push(JSON.parse(message));
    console.log(message);
 })
 ws.send(JSON.stringify({author: 'Server', message: 'connected'}));
});

server.listen(1337, 'fabiangumbrecht', () => {
    console.log(`Server started on port ${JSON.stringify(server.address())}`);
});
