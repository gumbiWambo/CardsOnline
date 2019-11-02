"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const game_1 = require("./classes/game");
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
let data = [];
let game;
let gameList = [];
wss.on('connection', (ws) => {
    if (!game) {
        game = new game_1.Game('magic', 'biot');
    }
    if (!game.addPlayer(ws) || gameList.length > 0) {
        gameList.push(game);
        if (gameList.length !== 1) {
            game = new game_1.Game('magic', 'biot');
        }
    }
    ws.on('message', (message) => {
        data.push(JSON.parse(message));
        console.log(message);
    });
    ws.send(JSON.stringify({ author: 'Server', message: 'connected' }));
});
server.listen(1337, 'fabiangumbrecht', () => {
    console.log(`Server started on port ${JSON.stringify(server.address())}`);
});
//# sourceMappingURL=server.js.map