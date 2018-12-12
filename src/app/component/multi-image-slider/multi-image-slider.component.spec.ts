import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiImageSliderComponent } from './multi-image-slider.component';

describe('MultiImageSliderComponent', () => {
  let component: MultiImageSliderComponent;
  let fixture: ComponentFixture<MultiImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
