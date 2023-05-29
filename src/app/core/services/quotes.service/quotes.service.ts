import { Injectable } from '@angular/core';
import { BaseService } from '../base.service/base.service';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../../api/urls';
import { delay, map } from 'rxjs/operators';
import { of, race } from 'rxjs';
import { QuotesStorage } from '../../settings/qoutes-storage';
import { Utils } from '../../../shared/utils/utils';
import { Quote } from '../../../shared/models/quote';

@Injectable({
    providedIn: 'root'
})
export class QuotesService extends BaseService {

    constructor(httpClient: HttpClient, urls: Urls) {
        super(httpClient, urls);
    }

    takeNewQuote() {
        return race(
            this.takeNewQuoteFromServer(),
            this.takeQuoteFromStorage()
        )
            .pipe(map((res: Quote | Object) => {
                res['avatar'] = `assets/svg/avatar${Utils.getRandomIntInclusive(0, 12)}.svg`
                return res as Quote
            }))

    }

    takeNewQuoteFromServer() {
        return this.http.get(this.urls.getRandomQuote())
    }

    takeQuoteFromStorage() {
        return of(QuotesStorage[Utils.getRandomIntInclusive(0, QuotesStorage.length)]).pipe(
            delay(1000))
    }

}


