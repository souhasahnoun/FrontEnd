import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportjournalpdfComponent } from './exportjournalpdf.component';

describe('ExportjournalpdfComponent', () => {
  let component: ExportjournalpdfComponent;
  let fixture: ComponentFixture<ExportjournalpdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportjournalpdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportjournalpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
