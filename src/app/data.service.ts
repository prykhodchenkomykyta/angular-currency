import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://api.currencylayer.com';
const key = '0d542abe98c643ea10128e6cb419d7d6';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCurrencies(): any {
    return this.http.get<any>(`${apiUrl}/list?access_key=${key}`);
  }

  getLatestRate(inCurr, outCurr): any {
    return this.http.get<any>(`https://api.exchangeratesapi.io/latest?base=${inCurr}&symbols=${outCurr}`);
  }
}
