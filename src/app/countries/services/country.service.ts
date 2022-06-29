import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v2';
  get httpParams () {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private httpClient:HttpClient) { }

  searchCountry(term: string):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.httpClient.get<Country[]>(url, {params: this.httpParams}).pipe(
      
    )
  }

  searchCapital(term: string):Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url, {params: this.httpParams}).pipe(
      
    )
  }

  getCountryByCode(code:string):Observable<Country> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<Country>(url);
  }

  searchRegion(region:string):Observable<Country[]> {

    const url = `${this.apiUrl}/regionalbloc/${region}`;
    return this.httpClient.get<Country[]>(url, {params: this.httpParams});
  }
}
