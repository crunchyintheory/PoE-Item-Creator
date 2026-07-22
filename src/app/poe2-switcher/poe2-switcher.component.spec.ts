import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poe2SwitcherComponent } from './poe2-switcher.component';

describe('Poe2SwitcherComponent', () => {
  let component: Poe2SwitcherComponent;
  let fixture: ComponentFixture<Poe2SwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Poe2SwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poe2SwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
