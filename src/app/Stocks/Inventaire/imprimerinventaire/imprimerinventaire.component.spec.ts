import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerinventaireComponent } from './imprimerinventaire.component';

describe('ImprimerinventaireComponent', () => {
  let component: ImprimerinventaireComponent;
  let fixture: ComponentFixture<ImprimerinventaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerinventaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerinventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
