import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerfactureavoircComponent } from './imprimerfactureavoirc.component';

describe('ImprimerfactureavoircComponent', () => {
  let component: ImprimerfactureavoircComponent;
  let fixture: ComponentFixture<ImprimerfactureavoircComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerfactureavoircComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerfactureavoircComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
