import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ItemsService {

  private url = "https://jsonplaceholder.typicode.com/photos";
  constructor(private readonly http: HttpClient) {}



  getItems() {
    return this.http.get(this.url);
  }

  getItemById() {

  }
}
