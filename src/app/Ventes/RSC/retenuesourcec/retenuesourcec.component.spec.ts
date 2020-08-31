import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetenuesourcecComponent } from './retenuesourcec.component';

describe('RetenuesourcecComponent', () => {
  let component: RetenuesourcecComponent;
  let fixture: ComponentFixture<RetenuesourcecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetenuesourcecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetenuesourcecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
