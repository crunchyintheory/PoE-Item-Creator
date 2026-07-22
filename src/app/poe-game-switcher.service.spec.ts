import { TestBed } from '@angular/core/testing';

import { PoeGameSwitcherService } from './poe-game-switcher.service';

describe('PoeGameSwitcherService', () => {
  let service: PoeGameSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoeGameSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
