import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepaiementpersonelComponent } from './listepaiementpersonel.component';

describe('ListepaiementpersonelComponent', () => {
  let component: ListepaiementpersonelComponent;
  let fixture: ComponentFixture<ListepaiementpersonelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListepaiementpersonelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepaiementpersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
