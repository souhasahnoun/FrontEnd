import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierretraitcaisseComponent } from './modifierretraitcaisse.component';

describe('ModifierretraitcaisseComponent', () => {
  let component: ModifierretraitcaisseComponent;
  let fixture: ComponentFixture<ModifierretraitcaisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierretraitcaisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierretraitcaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
