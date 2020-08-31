import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerfichereceptionComponent } from './imprimerfichereception.component';

describe('ImprimerfichereceptionComponent', () => {
  let component: ImprimerfichereceptionComponent;
  let fixture: ComponentFixture<ImprimerfichereceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerfichereceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerfichereceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
