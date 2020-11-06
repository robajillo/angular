import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

 const serverURL = 'https://cors-anywhere.herokuapp.com/https://roba-ecommerce.herokuapp.com/api/products/'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.serverURL;

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any> {
    return this.http.get( serverURL );
  }

  get(id): Observable<any> {
    return this.http.get(`${serverURL}/${id}`);
  }


  create(data): Observable<any> {
    return this.http.post(serverURL, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${serverURL}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${serverURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(serverURL);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${serverURL}?title=${title}`);
  }

}