import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimercategorieComponent } from './imprimercategorie.component';

describe('ImprimercategorieComponent', () => {
  let component: ImprimercategorieComponent;
  let fixture: ComponentFixture<ImprimercategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimercategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimercategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
