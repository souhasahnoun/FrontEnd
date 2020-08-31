import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermagasinComponent } from './modifiermagasin.component';

describe('ModifiermagasinComponent', () => {
  let component: ModifiermagasinComponent;
  let fixture: ComponentFixture<ModifiermagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiermagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
