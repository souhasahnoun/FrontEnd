import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretattraitefComponent } from './imprimeretattraitef.component';

describe('ImprimeretattraitefComponent', () => {
  let component: ImprimeretattraitefComponent;
  let fixture: ComponentFixture<ImprimeretattraitefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretattraitefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretattraitefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
