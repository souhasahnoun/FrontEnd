import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerfacturefComponent } from './imprimerfacturef.component';

describe('ImprimerfacturefComponent', () => {
  let component: ImprimerfacturefComponent;
  let fixture: ComponentFixture<ImprimerfacturefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerfacturefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerfacturefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
