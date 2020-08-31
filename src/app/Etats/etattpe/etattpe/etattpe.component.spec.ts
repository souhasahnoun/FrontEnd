import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtattpeComponent } from './etattpe.component';

describe('EtattpeComponent', () => {
  let component: EtattpeComponent;
  let fixture: ComponentFixture<EtattpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtattpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtattpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
