import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateItemComponent } from './page-create-item.component';

describe('PageCreateItemComponent', () => {
  let component: PageCreateItemComponent;
  let fixture: ComponentFixture<PageCreateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreateItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
