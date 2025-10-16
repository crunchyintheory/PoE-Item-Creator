import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PoeGameSwitcherService} from "../poe-game-switcher.service";

@Component({
  selector: 'poe-poe2-switcher',
  templateUrl: './poe2-switcher.component.html',
  styleUrls: ['./poe2-switcher.component.scss']
})
export class Poe2SwitcherComponent implements OnInit {

  public switchValue: 'poe1' | 'poe2' = 'poe1';

  constructor(public switcherService: PoeGameSwitcherService) {
    this.switcherService.switchValue.subscribe(val => this.switchValue = val);
  }

  ngOnInit(): void {
  }

  public onValueChange(value: Event) {
    this.switcherService.switchValue.next(this.switchValue);
  }

}
