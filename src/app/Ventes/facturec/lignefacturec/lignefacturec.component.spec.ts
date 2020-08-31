import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignefacturecComponent } from './lignefacturec.component';

describe('LignefacturecComponent', () => {
  let component: LignefacturecComponent;
  let fixture: ComponentFixture<LignefacturecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignefacturecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignefacturecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
