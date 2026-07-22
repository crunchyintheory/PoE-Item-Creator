import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PoeGameSwitcherService {

  constructor() { }

  public switchValue = new BehaviorSubject<'poe1' | 'poe2'>('poe1');
}
