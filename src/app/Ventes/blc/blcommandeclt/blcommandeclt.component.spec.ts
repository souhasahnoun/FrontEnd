import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlcommandecltComponent } from './blcommandeclt.component';

describe('BlcommandecltComponent', () => {
  let component: BlcommandecltComponent;
  let fixture: ComponentFixture<BlcommandecltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlcommandecltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlcommandecltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
