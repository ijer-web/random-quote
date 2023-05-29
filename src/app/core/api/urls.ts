import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Urls {

  private _url(path: string) {
    const apiUrl: string = environment.apiUrl;
    let port: string = environment.port || '';
    if (port.length > 0) {
      port = `:${port}`;
    }
    return `${apiUrl}${port}/${path}`;
  }

  /* Auth */
  public loginAndGetToken() {
    return this._url('auth');
  }

  public logout() {
    return this._url('auth');
  }

  public signUp() {
    return this._url(`user/signup`);
  }

  public sendVerificationCode() {
    return this._url('user/registration/confirm');
  }

  public reSendVerificationCodeEmail() {
    return this._url('user/resend-code');
  }

  public requestResetPassword() {
    return this._url('user/reset-password');
  }

  public confirmResetPassword() {
    return this._url('user/reset-password/confirm');
  }

  /* Qutes */

  public getRandomQuote() {
    return this._url(`random`);
  }

}
