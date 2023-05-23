import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
export interface Quote {
  text: string;
  author: string;
}
@Component({
  selector: 'app-quotes-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes-slider.component.html',
  styleUrls: ['./quotes-slider.component.scss']
})
export class QuotesSliderComponent implements OnInit {
  quotes: Quote[] = [
    { text: 'Цитата 1', author: 'Автор 1' },
    { text: 'Цитата 2', author: 'Автор 2' },
    { text: 'Цитата 3', author: 'Автор 3' }
    // Добавьте свои цитаты
  ];
  currentIndex = 0;

  ngOnInit() {
    this.startSlider();
  }

  startSlider() {
    setInterval(() => {
      this.nextQuote();
    }, 3000);
  }

  nextQuote() {
    console.log('nextQuote')
    this.currentIndex = (this.currentIndex + 1) % this.quotes.length;
  }

}


