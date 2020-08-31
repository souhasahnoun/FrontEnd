import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignefacturefComponent } from './lignefacturef.component';

describe('LignefacturefComponent', () => {
  let component: LignefacturefComponent;
  let fixture: ComponentFixture<LignefacturefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignefacturefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignefacturefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
