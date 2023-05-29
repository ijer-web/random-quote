import { TestBed } from '@angular/core/testing';

import { QuotesService } from './quotes.service';
import { HttpClientModule } from '@angular/common/http';

describe('QuotesService', () => {
  let service: QuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(QuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
