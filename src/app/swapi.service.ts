import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  url:any = "https://swapi.co/api/films";

  constructor(private http:HttpClient) { }

  async list() {
    return await this.http.get(this.url).toPromise();
  }

  async getOne(id:string) {
    return await this.http.get(`${this.url}/${id}`).toPromise();
  }
}
