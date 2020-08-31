import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerfamilleComponent } from './imprimerfamille.component';

describe('ImprimerfamilleComponent', () => {
  let component: ImprimerfamilleComponent;
  let fixture: ComponentFixture<ImprimerfamilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerfamilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerfamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
