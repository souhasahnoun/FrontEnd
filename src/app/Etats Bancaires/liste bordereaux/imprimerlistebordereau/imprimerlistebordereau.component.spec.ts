import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerlistebordereauComponent } from './imprimerlistebordereau.component';

describe('ImprimerlistebordereauComponent', () => {
  let component: ImprimerlistebordereauComponent;
  let fixture: ComponentFixture<ImprimerlistebordereauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerlistebordereauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerlistebordereauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
