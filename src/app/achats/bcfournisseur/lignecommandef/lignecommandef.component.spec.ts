import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignecommandefComponent } from './lignecommandef.component';

describe('LignecommandefComponent', () => {
  let component: LignecommandefComponent;
  let fixture: ComponentFixture<LignecommandefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignecommandefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignecommandefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
