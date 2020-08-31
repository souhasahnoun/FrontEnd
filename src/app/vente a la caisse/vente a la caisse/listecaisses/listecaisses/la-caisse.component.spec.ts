import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCaisseComponent } from './la-caisse.component';

describe('LaCaisseComponent', () => {
  let component: LaCaisseComponent;
  let fixture: ComponentFixture<LaCaisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaCaisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
