import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercaisseComponent } from './modifiercaisse.component';

describe('ModifiercaisseComponent', () => {
  let component: ModifiercaisseComponent;
  let fixture: ComponentFixture<ModifiercaisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiercaisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiercaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
