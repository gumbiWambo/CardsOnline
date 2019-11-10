"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const field_1 = require("./field");
const card_1 = require("./card");
const PlayerActionType_1 = require("../Enumerations/PlayerActionType");
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
                this.handleAction(JSON.parse(action));
                this.testSetField();
                this.sendToAllPlayers('game', { type: 'field', field: this.field });
            });
        });
    }
    handleAction(action) {
        if (action) {
            switch (action.type) {
                case PlayerActionType_1.PlayerActionType.SetEffect:
                    console.log('Effect Set');
                    break;
                case PlayerActionType_1.PlayerActionType.SetCreature:
                    console.log('Creature Set');
                    break;
                case PlayerActionType_1.PlayerActionType.ActivateCreature:
                    console.log('Creature Activated');
                    break;
                case PlayerActionType_1.PlayerActionType.ActivateEffect:
                    console.log('Effect Activated');
                    break;
            }
        }
    }
    testSetField() {
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
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map