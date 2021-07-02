import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  // define variables
  baseUrl: string = environment.baseUrl;

  constructor(private _http: HttpClient) { }

  // get methods
  // 01. get repos
  getRepos(date : string, page : number) {
    var url = this.baseUrl + 'search/repositories?q=created:>'+ date +'&sort=stars&order=desc&page=' + page;
    return this._http.get(url).pipe(map(res => res));
  }
}
