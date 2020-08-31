import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneblfComponent } from './ligneblf.component';

describe('LigneblfComponent', () => {
  let component: LigneblfComponent;
  let fixture: ComponentFixture<LigneblfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneblfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneblfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
