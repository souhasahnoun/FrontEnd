import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimermarqueComponent } from './imprimermarque.component';

describe('ImprimermarqueComponent', () => {
  let component: ImprimermarqueComponent;
  let fixture: ComponentFixture<ImprimermarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimermarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimermarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
