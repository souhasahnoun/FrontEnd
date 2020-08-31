import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerrscComponent } from './imprimerrsc.component';

describe('ImprimerrscComponent', () => {
  let component: ImprimerrscComponent;
  let fixture: ComponentFixture<ImprimerrscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerrscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerrscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
