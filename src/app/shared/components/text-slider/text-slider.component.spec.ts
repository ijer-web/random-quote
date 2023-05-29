import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSliderComponent } from './text-slider.component';

describe('QuotesSliderComponent', () => {
  let component: TextSliderComponent;
  let fixture: ComponentFixture<TextSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextSliderComponent]
    });
    fixture = TestBed.createComponent(TextSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
