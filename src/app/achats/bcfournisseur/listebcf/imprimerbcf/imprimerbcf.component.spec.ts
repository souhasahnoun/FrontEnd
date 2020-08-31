import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerbcfComponent } from './imprimerbcf.component';

describe('ImprimerbcfComponent', () => {
  let component: ImprimerbcfComponent;
  let fixture: ComponentFixture<ImprimerbcfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerbcfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerbcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
