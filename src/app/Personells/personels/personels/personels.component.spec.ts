import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelsComponent } from './personels.component';

describe('PersonelsComponent', () => {
  let component: PersonelsComponent;
  let fixture: ComponentFixture<PersonelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
