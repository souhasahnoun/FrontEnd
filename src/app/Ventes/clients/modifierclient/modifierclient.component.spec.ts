import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierclientComponent } from './modifierclient.component';

describe('ModifierclientComponent', () => {
  let component: ModifierclientComponent;
  let fixture: ComponentFixture<ModifierclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
