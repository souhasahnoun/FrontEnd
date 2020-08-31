import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignedevisComponent } from './lignedevis.component';

describe('LignedevisComponent', () => {
  let component: LignedevisComponent;
  let fixture: ComponentFixture<LignedevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignedevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignedevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
