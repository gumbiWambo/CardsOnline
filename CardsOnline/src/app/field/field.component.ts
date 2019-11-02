import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  laneKind1
  landKind2
  effectSlotsEnemyLane1 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  creatureSlotsEnemyLane1 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  effectSlotsPlayerLane1 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  creatureSlotsPlayerLane1 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  effectSlotsEnemyLane2 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  creatureSlotsEnemyLane2 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  effectSlotsPlayerLane2 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  creatureSlotsPlayerLane2 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  constructor(public game: GameService) { }

  ngOnInit() {
    this.game.gameStarted.pipe(find(value => !!value)).subscribe((next => {
      console.log(next);
    }));
    this.game.gameField.subscribe(next => {
      if(next !== null) {
        console.log(next);
        this.laneKind1 = next.leftLane.type;
        this.effectSlotsEnemyLane1 = next.leftLane.effectsSide1;
        this.effectSlotsEnemyLane2 = next.rightLane.effectsSide1;
        this.effectSlotsPlayerLane1 = next.leftLane.effectsSide2;
        this.effectSlotsPlayerLane2 = next.rightLane.effectsSide2;

        this.creatureSlotsEnemyLane1 = next.leftLane.creaturesSide1;
        this.creatureSlotsEnemyLane2 = next.rightLane.creaturesSide1;
        this.creatureSlotsPlayerLane1 = next.leftLane.creaturesSide2;
        this.creatureSlotsPlayerLane2 = next.rightLane.creaturesSide2;
        this.landKind2 = next.rightLane.type;
      }
    });
  }

}
