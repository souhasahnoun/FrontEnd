import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiertvaComponent } from './modifiertva.component';

describe('ModifiertvaComponent', () => {
  let component: ModifiertvaComponent;
  let fixture: ComponentFixture<ModifiertvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiertvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiertvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
