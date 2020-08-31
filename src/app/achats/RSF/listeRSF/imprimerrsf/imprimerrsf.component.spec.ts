import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerrsfComponent } from './imprimerrsf.component';

describe('ImprimerrsfComponent', () => {
  let component: ImprimerrsfComponent;
  let fixture: ComponentFixture<ImprimerrsfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerrsfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerrsfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
