import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySelectCreateComponent } from './category-select-create.component';

describe('CategorySelectCreateComponent', () => {
  let component: CategorySelectCreateComponent;
  let fixture: ComponentFixture<CategorySelectCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySelectCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySelectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
