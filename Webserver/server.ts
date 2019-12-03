import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import * as bodyParser from 'body-parser';
import { Game } from './classes/game';
import { Authentication } from './classes/authentication';
import { Database } from './classes/database';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});
const authentication = Authentication.getInstace();
const database = Database.getInstance();
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
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});
app.use(bodyParser.json());
app.get('/register', (request, response) => {
  response.send({key: authentication.createRegisterSession()})
});
app.put('/register', (request, response) => {
  // console.log('Register-IP', request.ip);
  // console.log('Register-Request', request.body);
  // console.log(authentication.validateRegisterSessionKey(request.body.key));
  database.getPlayer();
  if(request.body === undefined) {
    response.status(400).send('No body defined');
  } else {
    response.status(200).send({message: 'ok'});
  }
});
app.put('/login', (request, response) => {});

server.listen(1337, 'fabiangumbrecht', () => {
    console.log(`Server started on port ${JSON.stringify(server.address())}`);
});

