import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalcaisseComponent } from './journalcaisse.component';

describe('JournalcaisseComponent', () => {
  let component: JournalcaisseComponent;
  let fixture: ComponentFixture<JournalcaisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalcaisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalcaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
