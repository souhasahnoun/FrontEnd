import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretatrecouvrementfComponent } from './imprimeretatrecouvrementf.component';

describe('ImprimeretatrecouvrementfComponent', () => {
  let component: ImprimeretatrecouvrementfComponent;
  let fixture: ComponentFixture<ImprimeretatrecouvrementfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretatrecouvrementfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretatrecouvrementfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
