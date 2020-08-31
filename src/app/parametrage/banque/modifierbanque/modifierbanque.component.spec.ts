import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierbanqueComponent } from './modifierbanque.component';

describe('ModifierbanqueComponent', () => {
  let component: ModifierbanqueComponent;
  let fixture: ComponentFixture<ModifierbanqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierbanqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierbanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
