import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { GameType } from "../item";

@Component({
  selector: 'poe-poe2-switcher',
  templateUrl: './poe2-switcher.component.html',
  styleUrls: ['./poe2-switcher.component.scss']
})
export class Poe2SwitcherComponent implements OnInit {

  @Input() game: GameType = 'poe1';
  @Output() gameChange = new EventEmitter<GameType>();

  ngOnInit(): void {
  }

}
