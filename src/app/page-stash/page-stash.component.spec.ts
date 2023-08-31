import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStashComponent } from './page-stash.component';

describe('PageStashComponent', () => {
  let component: PageStashComponent;
  let fixture: ComponentFixture<PageStashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
