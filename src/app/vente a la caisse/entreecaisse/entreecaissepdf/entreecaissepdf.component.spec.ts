import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreecaissepdfComponent } from './entreecaissepdf.component';

describe('EntreecaissepdfComponent', () => {
  let component: EntreecaissepdfComponent;
  let fixture: ComponentFixture<EntreecaissepdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreecaissepdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreecaissepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
