import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../../api/urls';

@Injectable({
  providedIn: 'root',
})
export class BaseService {

  constructor(
      protected http: HttpClient,
      protected urls: Urls,
  ) {
  }
}
