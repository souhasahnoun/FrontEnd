import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerfactureproformaComponent } from './imprimerfactureproforma.component';

describe('ImprimerfactureproformaComponent', () => {
  let component: ImprimerfactureproformaComponent;
  let fixture: ComponentFixture<ImprimerfactureproformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerfactureproformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerfactureproformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
