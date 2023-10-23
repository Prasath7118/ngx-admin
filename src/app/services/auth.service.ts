import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  /* loginUser(): Observable<User[]> {
    return this.http.get<User[]>(this.authUrl + '/login');
  } */

  /** GET product by id. Will 404 if id not found */
  /* getProduct(id: any): Observable<any> {
    const url = `${this.productUrl}/product/${id}`;
    return this.http.get<Product>(url);
  } */

  loginUser(user: any) {
	//console.log(product);
    return this.http.post(this.authUrl + '/login', user, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
  }

  /** PUT: update the product on the server */
  /* updateProduct(product: Product): Observable<any> {
    return this.http.put(this.productUrl + '/product/' + product.id, product, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
  } */

  /** DELETE: delete the product from the server */
  /* deleteProduct(product: Product) {
	  if (confirm("Are you sure to delete?")) {
		console.log(product);

		const options = {
		  headers: new HttpHeaders({
			'Content-Type': 'application/json',
		  }),
		  body: product,
		  responseType: 'text' as 'json'
		};

		return this.http.delete(this.productUrl + '/product/' + product.id, options);
	  }

	  return of({});
  } */
}
