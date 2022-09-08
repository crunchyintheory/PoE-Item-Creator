import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropFieldGroupComponent } from './prop-field-group.component';

describe('PropFieldGroupComponent', () => {
  let component: PropFieldGroupComponent;
  let fixture: ComponentFixture<PropFieldGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropFieldGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropFieldGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
