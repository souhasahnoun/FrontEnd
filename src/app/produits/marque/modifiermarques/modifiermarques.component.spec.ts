import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermarquesComponent } from './modifiermarques.component';

describe('ModifiermarquesComponent', () => {
  let component: ModifiermarquesComponent;
  let fixture: ComponentFixture<ModifiermarquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiermarquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
