import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignefactureproformaComponent } from './lignefactureproforma.component';

describe('LignefactureproformaComponent', () => {
  let component: LignefactureproformaComponent;
  let fixture: ComponentFixture<LignefactureproformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignefactureproformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignefactureproformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
