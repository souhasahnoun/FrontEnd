import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerfichegarentieComponent } from './imprimerfichegarentie.component';

describe('ImprimerfichegarentieComponent', () => {
  let component: ImprimerfichegarentieComponent;
  let fixture: ComponentFixture<ImprimerfichegarentieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerfichegarentieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerfichegarentieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
