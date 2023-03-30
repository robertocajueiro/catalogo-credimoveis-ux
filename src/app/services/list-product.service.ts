import { Injectable } from '@angular/core';
import { Product } from '../Product';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListProductsService {
  private apiUrl = 'http://192.168.13.196:8080/produtos/all';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
