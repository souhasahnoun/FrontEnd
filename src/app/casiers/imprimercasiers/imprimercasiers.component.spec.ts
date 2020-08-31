import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimercasiersComponent } from './imprimercasiers.component';

describe('ImprimercasiersComponent', () => {
  let component: ImprimercasiersComponent;
  let fixture: ComponentFixture<ImprimercasiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimercasiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimercasiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
