import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierproduitComponent } from './modifierproduit.component';

describe('ModifierproduitComponent', () => {
  let component: ModifierproduitComponent;
  let fixture: ComponentFixture<ModifierproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
