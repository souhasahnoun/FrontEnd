import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretattpeComponent } from './imprimeretattpe.component';

describe('ImprimeretattpeComponent', () => {
  let component: ImprimeretattpeComponent;
  let fixture: ComponentFixture<ImprimeretattpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretattpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretattpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
