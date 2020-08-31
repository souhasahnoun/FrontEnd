import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreecaisseComponent } from './entreecaisse.component';

describe('EntreecaisseComponent', () => {
  let component: EntreecaisseComponent;
  let fixture: ComponentFixture<EntreecaisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreecaisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreecaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
