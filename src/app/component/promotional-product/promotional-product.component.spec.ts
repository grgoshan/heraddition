import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalProductComponent } from './promotional-product.component';

describe('PromotionalProductComponent', () => {
  let component: PromotionalProductComponent;
  let fixture: ComponentFixture<PromotionalProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionalProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
