import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalcaisseexcelComponent } from './journalcaisseexcel.component';

describe('JournalcaisseexcelComponent', () => {
  let component: JournalcaisseexcelComponent;
  let fixture: ComponentFixture<JournalcaisseexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalcaisseexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalcaisseexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
