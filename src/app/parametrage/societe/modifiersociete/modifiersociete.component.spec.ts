import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiersocieteComponent } from './modifiersociete.component';

describe('ModifiersocieteComponent', () => {
  let component: ModifiersocieteComponent;
  let fixture: ComponentFixture<ModifiersocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiersocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiersocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
