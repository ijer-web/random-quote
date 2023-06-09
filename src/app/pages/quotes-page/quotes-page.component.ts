import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSliderComponent } from '../../shared/components/text-slider/text-slider.component';
import { Quote } from '../../shared/models/quote';
import { QuotesService } from '../../core/services/quotes.service/quotes.service';
import { Settings } from '../../core/settings/settings';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../../shared/components/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-quotes-page',
  standalone: true,
  imports: [CommonModule, TextSliderComponent, MatDialogModule],
  templateUrl: './quotes-page.component.html',
  styleUrls: ['./quotes-page.component.scss']
})
export class QuotesPageComponent implements OnInit {
  public quotes: Quote[] = [];

  constructor(private quotesService: QuotesService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.checkQuantityBrandNewQuotes();
  }

  checkQuantityBrandNewQuotes() {
    this.quotes.forEach(quote => quote.views = quote?.views || 0);
    if (this.quotes.filter(quote => quote.views === 0).length < Settings.sliderStorageSize) {
      this.takeBrandNewQuote()
    }

  }

  onShowedNextItem(index: number) {
    this.quotes[index].views = this.quotes[index].views ? (this.quotes[index].views! + 1) : 1;
    this.checkQuantityBrandNewQuotes();
  }

  takeBrandNewQuote() {
    this.quotesService
      .takeNewQuote()
      .subscribe(res => {
        if (this.uniquenessCheck(res as Quote)) {
          this.quotes.push(res as Quote);
        }
        this.checkQuantityBrandNewQuotes();
      })
  }

  private uniquenessCheck(checkQuote: Quote) {
    if (!checkQuote || !checkQuote.content) return false
    return !this.quotes.map(quote => quote.content).includes(checkQuote.content)
  }

  onShareItem(event: Quote) {
    this.showDialog(event.content || '')
  }

  private showDialog(content: string) {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content
      }
    });

  }
}
