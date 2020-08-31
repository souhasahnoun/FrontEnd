import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerpaiementfComponent } from './imprimerpaiementf.component';

describe('ImprimerpaiementfComponent', () => {
  let component: ImprimerpaiementfComponent;
  let fixture: ComponentFixture<ImprimerpaiementfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerpaiementfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerpaiementfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
