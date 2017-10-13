import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditSingleComponent } from './product-edit-single.component';

describe('ProductEditSingleComponent', () => {
  let component: ProductEditSingleComponent;
  let fixture: ComponentFixture<ProductEditSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEditSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
