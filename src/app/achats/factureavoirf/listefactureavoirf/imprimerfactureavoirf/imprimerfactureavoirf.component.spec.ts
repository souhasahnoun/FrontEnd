import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerfactureavoirfComponent } from './imprimerfactureavoirf.component';

describe('ImprimerfactureavoirfComponent', () => {
  let component: ImprimerfactureavoirfComponent;
  let fixture: ComponentFixture<ImprimerfactureavoirfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerfactureavoirfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerfactureavoirfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
