import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerbefComponent } from './imprimerbef.component';

describe('ImprimerbefComponent', () => {
  let component: ImprimerbefComponent;
  let fixture: ComponentFixture<ImprimerbefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerbefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerbefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
