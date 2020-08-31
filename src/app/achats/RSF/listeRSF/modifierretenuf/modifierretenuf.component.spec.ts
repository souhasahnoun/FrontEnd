import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierretenufComponent } from './modifierretenuf.component';

describe('ModifierretenufComponent', () => {
  let component: ModifierretenufComponent;
  let fixture: ComponentFixture<ModifierretenufComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierretenufComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierretenufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
