import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiersouchesComponent } from './modifiersouches.component';

describe('ModifiersouchesComponent', () => {
  let component: ModifiersouchesComponent;
  let fixture: ComponentFixture<ModifiersouchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiersouchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiersouchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
