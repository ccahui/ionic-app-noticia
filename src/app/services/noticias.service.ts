import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  obtenerTitularesDeNoticias() {
    return this.http.get<TopHeadlines>('https://newsapi.org/v2/top-headlines?country=us&apiKey=55d64b89b0724ac19a5f08f5b205849b');
  }
}
