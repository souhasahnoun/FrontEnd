import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierfamillesComponent } from './modifierfamilles.component';

describe('ModifierfamillesComponent', () => {
  let component: ModifierfamillesComponent;
  let fixture: ComponentFixture<ModifierfamillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierfamillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierfamillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
