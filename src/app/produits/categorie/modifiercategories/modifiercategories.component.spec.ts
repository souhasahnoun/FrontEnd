import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercategoriesComponent } from './modifiercategories.component';

describe('ModifiercategoriesComponent', () => {
  let component: ModifiercategoriesComponent;
  let fixture: ComponentFixture<ModifiercategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiercategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiercategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
