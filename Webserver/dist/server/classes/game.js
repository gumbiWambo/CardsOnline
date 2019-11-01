"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor() {
        this.player = [];
    }
    addPlayer(newPlayer) {
        if (this.player.length + 1 <= 4) {
            this.player.push(newPlayer);
            if (this.player.length === 4) {
                this.sendToAllPlayers('game', { type: 'pre', gameStarted: true, message: 'Game started' });
            }
        }
        else {
            newPlayer.send(JSON.stringify({ type: 'game', data: 'Full!' }));
        }
    }
    sendToAllPlayers(type, data) {
        this.player.forEach((player) => {
            player.send(JSON.stringify({ type: type, data: data }));
        });
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map