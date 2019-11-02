"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const field_1 = require("./field");
const card_1 = require("./card");
class Game {
    constructor(laneLeft, laneRight) {
        this.gameJoinable = true;
        this.players = [];
        this.field = new field_1.Field(laneLeft, laneRight);
        this.id = Date.now();
    }
    addPlayer(newPlayer) {
        if (this.players.length + 1 <= 2) {
            this.players.push(newPlayer);
            if (this.players.length === 2) {
                this.peparePlayer();
                this.sendToAllPlayers('game', { type: 'field', field: this.field });
                this.sendToAllPlayers('game', { type: 'pre', gameStarted: true, message: 'Game started' });
                this.gameJoinable = false;
            }
        }
        else {
            newPlayer.send(JSON.stringify({ type: 'game', data: 'Full!' }));
            return false;
        }
        return true;
    }
    sendToAllPlayers(type, data) {
        this.players.forEach((player) => {
            player.send(JSON.stringify({ type: type, data: data }));
        });
    }
    peparePlayer() {
        this.players.forEach((player) => {
            player.on('message', (action) => {
                console.log(action);
                this.field.setEffectLeftLane(0, 1, new card_1.Card('effect', 'magic', 2));
                this.field.setEffectRightLane(0, 1, new card_1.Card('effect', 'magic', 2));
                this.field.setEffectLeftLane(0, 2, new card_1.Card('effect', 'magic', 2));
                this.field.setEffectRightLane(0, 2, new card_1.Card('effect', 'magic', 2));
                this.field.setCreatureLeftLane(0, 1, new card_1.Card('creature', 'magic', 2));
                this.field.setCreatureRightLane(0, 1, new card_1.Card('creature', 'magic', 2));
                this.field.setCreatureLeftLane(0, 2, new card_1.Card('creature', 'magic', 2));
                this.field.setCreatureRightLane(0, 2, new card_1.Card('creature', 'magic', 2));
                this.field.setCreatureLeftLane(2, 1, new card_1.Card('creature', 'magic', 2));
                this.field.setCreatureRightLane(4, 1, new card_1.Card('creature', 'magic', 2));
                this.field.setCreatureLeftLane(3, 2, new card_1.Card('creature', 'magic', 2));
                this.field.setCreatureRightLane(1, 2, new card_1.Card('creature', 'magic', 2));
                this.sendToAllPlayers('game', { type: 'field', field: this.field });
            });
        });
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map