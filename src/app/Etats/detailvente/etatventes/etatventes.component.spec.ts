import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatventesComponent } from './etatventes.component';

describe('EtatventesComponent', () => {
  let component: EtatventesComponent;
  let fixture: ComponentFixture<EtatventesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatventesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatventesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
