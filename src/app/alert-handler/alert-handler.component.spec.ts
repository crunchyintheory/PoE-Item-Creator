import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertHandlerComponent } from './alert-handler.component';

describe('AlertHandlerComponent', () => {
  let component: AlertHandlerComponent;
  let fixture: ComponentFixture<AlertHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
