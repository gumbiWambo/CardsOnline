import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'OCG-card-slot',
  templateUrl: './card-slot.component.html',
  styleUrls: ['./card-slot.component.scss']
})
export class CardSlotComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  url: string;
  @Input()
  typ: string;
  constructor() { }

  ngOnInit() {
  }

}
