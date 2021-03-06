import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Login }           from './login';

@Injectable()
export class LoginService {

  constructor(private http: Http) {

  }

  private authUrl = 'http://127.0.0.1:5000/api/logval';

  getAuth(name: String, password: String): Observable<Login> {
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  	let body = JSON.stringify({ name: name, password: password });
  	return this.http.post(this.authUrl, body ,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
