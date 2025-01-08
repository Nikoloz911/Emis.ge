import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmisService {
  constructor(private _http: HttpClient) {}

  // Footer API
  private _ContactsURL = 'https://emis-api.emis.ge/api/contact'; // Used
  getContacts() {
    return this._http.get(this._ContactsURL);
  }

  // Home Page products API
  private _productsURL = 'https://emis-api.emis.ge/api/products?take=10'; // Used
  getProducts() {
    return this._http.get(this._productsURL);
  }

  // Posts Page API
  private _postsURL = 'https://emis-api.emis.ge/api/posts?take=10';          // Not Used
  getPosts() {
    return this._http.get(this._postsURL);
  }

  // Home Page Popular Links API
  private _popularLinksURL = 'https://emis-api.emis.ge/api/popular-links'; // Used
  getPopularLinks() {
    return this._http.get(this._popularLinksURL);
  }

  // Home Page Partners API
  private _partnersURL = 'https://emis-api.emis.ge/api/partners';          // Used
  getPartners() {
    return this._http.get(this._partnersURL);
  }

  // Home Page Statistic API
  private _statisticURL = 'https://emis-api.emis.ge/api/stats';         // Used
  getStatistic() {
    return this._http.get(this._statisticURL);
  }

  /// API FOR INSIDE PAGES ///

  // Inside page products API
  private _insideProductsURL = 'https://emis-api.emis.ge/api/products/';        //  Used
  getInsideProducts(productId: number): Observable<any> {
    return this._http.get(`${this._insideProductsURL}${productId}`);
  }

  // Posts Page API    
  private _insidePostsListURL = 'https://emis-api.emis.ge/api/posts?per_page=6&page=';     // Used
  getInsidePostsList(page: number) {
    return this._http.get(`${this._insidePostsListURL}${page}`);
  }

  // Inside page posts Details API
  private _insidePostsDetailsURL = 'https://emis-api.emis.ge/api/posts/';          // Used
  getInsidePostsDetails(postId: number) {
    return this._http.get(`${this._insidePostsDetailsURL}${postId}`);
  }

  // Inside page Service API
  private _insideServiceURL = 'https://emis-api.emis.ge/api/services/';            // Used
  getInsideService(serviceId: number): Observable<any> {
    return this._http.get(`${this._insideServiceURL}${serviceId}`);
  }

  /// API FOR INSIDE PAGES ///
}
