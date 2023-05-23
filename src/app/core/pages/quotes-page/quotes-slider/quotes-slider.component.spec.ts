import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesSliderComponent } from './quotes-slider.component';

describe('QuotesSliderComponent', () => {
  let component: QuotesSliderComponent;
  let fixture: ComponentFixture<QuotesSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuotesSliderComponent]
    });
    fixture = TestBed.createComponent(QuotesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
