import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerertvaComponent } from './gerertva.component';

describe('GerertvaComponent', () => {
  let component: GerertvaComponent;
  let fixture: ComponentFixture<GerertvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerertvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerertvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
