import {ErrorHandler, Injectable} from "@angular/core";
import {AlertService} from "../services/alert.service";
import {SpotifyService} from "../services/spotify.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  // private alertService: AlertService;
  // constructor(private _spotifyService:SpotifyService){}
  // https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c

  handleError(error: any): void {
    if (error.message === 'Unauthorized') {
      // this.alertService.warn('Need to re-authorize');
      console.log('Need to re-authorize');
      // window.open(this._spotifyService.getAuthorizeURL(), '_self');
    } else {
      console.log(error.message);
    }
    // throw new Error(error.message);
  }

}
