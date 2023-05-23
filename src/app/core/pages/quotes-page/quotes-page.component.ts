import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesSliderComponent } from './quotes-slider/quotes-slider.component';

@Component({
  selector: 'app-quotes-page',
  standalone: true,
  imports: [CommonModule, QuotesSliderComponent],
  templateUrl: './quotes-page.component.html',
  styleUrls: ['./quotes-page.component.scss']
})
export class QuotesPageComponent {

}
