import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierinitialisercodeComponent } from './modifierinitialisercode.component';

describe('ModifierinitialisercodeComponent', () => {
  let component: ModifierinitialisercodeComponent;
  let fixture: ComponentFixture<ModifierinitialisercodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierinitialisercodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierinitialisercodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
