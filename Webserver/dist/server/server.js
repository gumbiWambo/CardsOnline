"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const bodyParser = require("body-parser");
const game_1 = require("./classes/game");
const authentication_1 = require("./classes/authentication");
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
let data = [];
let game;
let gameList = [];
wss.on('connection', (ws) => {
    if (!game) {
        game = new game_1.Game('machine', 'magic');
    }
    if (!game.addPlayer(ws) || gameList.length > 0) {
        gameList.push(game);
        if (gameList.length !== 1) {
            game = new game_1.Game('machine', 'babarian');
        }
    }
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});
app.use(bodyParser.json());
app.put('/register', (request, response) => {
    console.log('Register-IP', request.ip);
    console.log('Register-Request', request.body);
    console.log('string', authentication_1.Authentication.generateRandomString());
    if (request.body === undefined) {
        response.status(400).send('No body defined');
    }
    else {
        response.status(200).send({ message: 'ok' });
    }
});
app.put('/login', (request, response) => { });
server.listen(1337, 'fabiangumbrecht', () => {
    console.log(`Server started on port ${JSON.stringify(server.address())}`);
});
//# sourceMappingURL=server.js.map