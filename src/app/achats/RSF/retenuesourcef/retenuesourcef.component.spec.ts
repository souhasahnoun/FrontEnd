import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetenuesourcefComponent } from './retenuesourcef.component';

describe('RetenuesourcefComponent', () => {
  let component: RetenuesourcefComponent;
  let fixture: ComponentFixture<RetenuesourcefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetenuesourcefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetenuesourcefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
