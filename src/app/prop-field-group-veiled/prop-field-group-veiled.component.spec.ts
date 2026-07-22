import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropFieldGroupVeiledComponent } from './prop-field-group-veiled.component';

describe('PropFieldGroupComponent', () => {
  let component: PropFieldGroupVeiledComponent;
  let fixture: ComponentFixture<PropFieldGroupVeiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropFieldGroupVeiledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropFieldGroupVeiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
