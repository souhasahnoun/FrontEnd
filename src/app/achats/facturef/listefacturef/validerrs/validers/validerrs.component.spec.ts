import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderrsComponent } from './validerrs.component';

describe('ValiderrsComponent', () => {
  let component: ValiderrsComponent;
  let fixture: ComponentFixture<ValiderrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiderrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
