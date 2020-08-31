import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimermvstockComponent } from './imprimermvstock.component';

describe('ImprimermvstockComponent', () => {
  let component: ImprimermvstockComponent;
  let fixture: ComponentFixture<ImprimermvstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimermvstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimermvstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
