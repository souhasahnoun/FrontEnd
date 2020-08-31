import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierenraitcaisseComponent } from './modifierenraitcaisse.component';

describe('ModifierenraitcaisseComponent', () => {
  let component: ModifierenraitcaisseComponent;
  let fixture: ComponentFixture<ModifierenraitcaisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierenraitcaisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierenraitcaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
