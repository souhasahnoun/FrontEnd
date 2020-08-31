import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivireglementComponent } from './suivireglement.component';

describe('SuivireglementComponent', () => {
  let component: SuivireglementComponent;
  let fixture: ComponentFixture<SuivireglementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuivireglementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivireglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
