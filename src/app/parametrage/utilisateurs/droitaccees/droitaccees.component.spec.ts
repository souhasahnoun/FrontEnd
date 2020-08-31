import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitacceesComponent } from './droitaccees.component';

describe('DroitacceesComponent', () => {
  let component: DroitacceesComponent;
  let fixture: ComponentFixture<DroitacceesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroitacceesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroitacceesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
