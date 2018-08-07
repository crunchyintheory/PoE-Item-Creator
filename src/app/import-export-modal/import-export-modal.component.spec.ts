import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportModalComponent } from './import-export-modal.component';

describe('ImportExportModalComponent', () => {
  let component: ImportExportModalComponent;
  let fixture: ComponentFixture<ImportExportModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportExportModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportExportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
