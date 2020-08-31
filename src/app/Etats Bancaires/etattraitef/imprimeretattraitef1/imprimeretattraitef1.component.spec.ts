import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimeretattraitef1Component } from './imprimeretattraitef1.component';

describe('Imprimeretattraitef1Component', () => {
  let component: Imprimeretattraitef1Component;
  let fixture: ComponentFixture<Imprimeretattraitef1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimeretattraitef1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimeretattraitef1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
