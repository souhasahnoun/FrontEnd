import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierfichegarentieComponent } from './modifierfichegarentie.component';

describe('ModifierfichegarentieComponent', () => {
  let component: ModifierfichegarentieComponent;
  let fixture: ComponentFixture<ModifierfichegarentieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierfichegarentieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierfichegarentieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
