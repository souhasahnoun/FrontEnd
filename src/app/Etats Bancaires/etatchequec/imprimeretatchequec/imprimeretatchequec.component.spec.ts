import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretatchequecComponent } from './imprimeretatchequec.component';

describe('ImprimeretatchequecComponent', () => {
  let component: ImprimeretatchequecComponent;
  let fixture: ComponentFixture<ImprimeretatchequecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretatchequecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretatchequecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
