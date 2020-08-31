import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerfacturecComponent } from './imprimerfacturec.component';

describe('ImprimerfacturecComponent', () => {
  let component: ImprimerfacturecComponent;
  let fixture: ComponentFixture<ImprimerfacturecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerfacturecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerfacturecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
