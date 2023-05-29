import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Quote} from '../../../shared/models/quote';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-text-slider',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './quotes-slider.component.html',
  styleUrls: ['./quotes-slider.component.scss']
})
export class QuotesSliderComponent implements OnInit {

  @Input() quotes: Quote[] = [];
  @Output() itemWasShowed: EventEmitter<number> = new EventEmitter<number>();

  activeItem: number = 1;

  next() {
    this.itemWasShowed.emit(this.activeItem)
    if (this.activeItem == this.quotes.length - 1) this.activeItem = 0;
    this.activeItem++;
  }

  pre() {
    if (this.activeItem == 0) this.activeItem = this.quotes.length;
    this.activeItem--;
  }

  ngOnInit(): void {
  }

  like(index?: any) {
    index = index || this.activeItem;
    this.quotes[index].liked = !this.quotes[index].liked;
  }

  share(index?: any) {
    index = index || this.activeItem;
    // this.quotes[index].liked = !this.quotes[index].liked;
  }
}


