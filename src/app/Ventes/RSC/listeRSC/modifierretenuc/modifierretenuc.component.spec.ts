import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierretenucComponent } from './modifierretenuc.component';

describe('ModifierretenucComponent', () => {
  let component: ModifierretenucComponent;
  let fixture: ComponentFixture<ModifierretenucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierretenucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierretenucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
