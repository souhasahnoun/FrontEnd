import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretatfacturefComponent } from './imprimeretatfacturef.component';

describe('ImprimeretatfacturefComponent', () => {
  let component: ImprimeretatfacturefComponent;
  let fixture: ComponentFixture<ImprimeretatfacturefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretatfacturefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretatfacturefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
