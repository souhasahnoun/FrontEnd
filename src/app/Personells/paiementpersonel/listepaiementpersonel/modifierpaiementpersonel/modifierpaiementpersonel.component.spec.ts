import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierpaiementpersonelComponent } from './modifierpaiementpersonel.component';

describe('ModifierpaiementpersonelComponent', () => {
  let component: ModifierpaiementpersonelComponent;
  let fixture: ComponentFixture<ModifierpaiementpersonelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierpaiementpersonelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierpaiementpersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
