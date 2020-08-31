import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCClientComponent } from './bcclient.component';

describe('BCClientComponent', () => {
  let component: BCClientComponent;
  let fixture: ComponentFixture<BCClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
