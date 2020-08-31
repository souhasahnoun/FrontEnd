import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerbccComponent } from './imprimerbcc.component';

describe('ImprimerbccComponent', () => {
  let component: ImprimerbccComponent;
  let fixture: ComponentFixture<ImprimerbccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerbccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerbccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
