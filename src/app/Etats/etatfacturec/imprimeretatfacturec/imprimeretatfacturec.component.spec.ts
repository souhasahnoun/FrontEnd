import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretatfacturecComponent } from './imprimeretatfacturec.component';

describe('ImprimeretatfacturecComponent', () => {
  let component: ImprimeretatfacturecComponent;
  let fixture: ComponentFixture<ImprimeretatfacturecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretatfacturecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretatfacturecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
