import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalcaissepdfComponent } from './journalcaissepdf.component';

describe('JournalcaissepdfComponent', () => {
  let component: JournalcaissepdfComponent;
  let fixture: ComponentFixture<JournalcaissepdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalcaissepdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalcaissepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
