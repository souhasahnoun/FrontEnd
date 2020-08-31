import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatjournalComponent } from './etatjournal.component';

describe('EtatjournalComponent', () => {
  let component: EtatjournalComponent;
  let fixture: ComponentFixture<EtatjournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatjournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatjournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
