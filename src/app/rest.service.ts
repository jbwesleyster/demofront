import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {

  url = 'http://localhost:8080/v1/find-hotel-cidade';

  constructor(private http: HttpClient) { }

  getHoteis() {
    return this.http.get(`${this.url}/1032/2020-04-20/2020-04-25/2/1`);
  }

  getHotel() {
    return this.http.get(`${this.url}/find-hotel-cidade/1032/2020-04-20/2020-04-25/2/1`);
  }
}
