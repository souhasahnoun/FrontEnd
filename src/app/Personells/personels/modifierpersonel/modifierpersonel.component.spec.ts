import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierpersonelComponent } from './modifierpersonel.component';

describe('ModifierpersonelComponent', () => {
  let component: ModifierpersonelComponent;
  let fixture: ComponentFixture<ModifierpersonelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierpersonelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierpersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
