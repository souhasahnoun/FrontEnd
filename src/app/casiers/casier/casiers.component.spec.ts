import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasiersComponent } from './casiers.component';

describe('CasiersComponent', () => {
  let component: CasiersComponent;
  let fixture: ComponentFixture<CasiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
