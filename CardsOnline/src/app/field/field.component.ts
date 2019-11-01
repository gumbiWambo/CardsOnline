import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  laneKind1 = "magic";
  landKind2 = "biot";
  effectSlotsEnemyLane1 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  creatureSlotsEnemyLane1 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  effectSlotsPlayerLane1 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  creatureSlotsPlayerLane1 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  effectSlotsEnemyLane2 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  creatureSlotsEnemyLane2 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  effectSlotsPlayerLane2 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  creatureSlotsPlayerLane2 = [{kind: null }, {kind: null }, {kind: null }, {kind: null }, {kind: null }];
  constructor(game: GameService) { }

  ngOnInit() {
  }

}
