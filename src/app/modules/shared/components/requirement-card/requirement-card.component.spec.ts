import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementCardComponent } from './requirement-card.component';

describe('RequirementCardComponent', () => {
  let component: RequirementCardComponent;
  let fixture: ComponentFixture<RequirementCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
