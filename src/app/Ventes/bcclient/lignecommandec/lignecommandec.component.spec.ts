import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignecommandecComponent } from './lignecommandec.component';

describe('LignecommandecComponent', () => {
  let component: LignecommandecComponent;
  let fixture: ComponentFixture<LignecommandecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignecommandecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignecommandecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
