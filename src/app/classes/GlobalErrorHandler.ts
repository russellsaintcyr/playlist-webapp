import {ErrorHandler, Injectable} from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  // https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c

  handleError(error: any): void {
    // if (error.message == 'Unauthorized') {
    //   alert('Need to re-authorize');
    // } else {
      console.log(error.message);
    // }
    // throw new Error(error.message);
  }

}
