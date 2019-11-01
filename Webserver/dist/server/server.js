"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const game_1 = require("./classes/game");
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
let playerAmount = 0;
let data = [];
const game = new game_1.Game();
wss.on('connection', (ws) => {
    game.addPlayer(ws);
    ws.on('message', (message) => {
        data.push(JSON.parse(message));
        console.log(data);
    });
    ws.send(JSON.stringify({ author: 'Server', message: 'connected' }));
});
server.listen(1337, 'fabiangumbrecht', () => {
    console.log(`Server started on port ${JSON.stringify(server.address())}`);
});
//# sourceMappingURL=server.js.map