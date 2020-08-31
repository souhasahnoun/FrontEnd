import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichegarentieComponent } from './fichegarentie.component';

describe('FichegarentieComponent', () => {
  let component: FichegarentieComponent;
  let fixture: ComponentFixture<FichegarentieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichegarentieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichegarentieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
