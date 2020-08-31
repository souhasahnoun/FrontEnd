import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichereceptionComponent } from './fichereception.component';

describe('FichereceptionComponent', () => {
  let component: FichereceptionComponent;
  let fixture: ComponentFixture<FichereceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichereceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichereceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
