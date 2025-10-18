import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHelpComponent } from './page-help.component';

describe('PageHelpComponent', () => {
  let component: PageHelpComponent;
  let fixture: ComponentFixture<PageHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
