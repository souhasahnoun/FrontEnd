import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretattraitecComponent } from './imprimeretattraitec.component';

describe('ImprimeretattraitecComponent', () => {
  let component: ImprimeretattraitecComponent;
  let fixture: ComponentFixture<ImprimeretattraitecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretattraitecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretattraitecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
