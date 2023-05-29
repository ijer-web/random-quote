import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesPageComponent } from './quotes-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('QuotesPageComponent', () => {
  let component: QuotesPageComponent;
  let fixture: ComponentFixture<QuotesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuotesPageComponent, CommonModule, HttpClientModule]
    });
    fixture = TestBed.createComponent(QuotesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
