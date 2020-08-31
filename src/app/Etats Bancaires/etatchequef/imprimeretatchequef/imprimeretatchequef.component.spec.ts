import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretatchequefComponent } from './imprimeretatchequef.component';

describe('ImprimeretatchequefComponent', () => {
  let component: ImprimeretatchequefComponent;
  let fixture: ComponentFixture<ImprimeretatchequefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretatchequefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretatchequefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
