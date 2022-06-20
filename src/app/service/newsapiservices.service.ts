import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiservicesService {
  constructor(private _http: HttpClient) {}

  // top stories api url
  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=6c895b39e585458fb62ab62a635d378a';
  //tech news api url
  techNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=6c895b39e585458fb62ab62a635d378a';

  businessNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6c895b39e585458fb62ab62a635d378a';

  healthNewsApiUrl =
    'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';

  entertainmentNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=6c895b39e585458fb62ab62a635d378a';

  
   
  //topheading
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
  //topheading
  techNews(): Observable<any> {
    return this._http.get(this.techNewsApiUrl);
  }
  businessNews(): Observable<any> {
    return this._http.get(this.businessNewsApiUrl);
  }
  healthNews(): Observable<any> {
    return this._http.get(this.healthNewsApiUrl);
  }
  entertainmentNews(): Observable<any> {
    return this._http.get(this.entertainmentNewsApiUrl);
  }
 
}
