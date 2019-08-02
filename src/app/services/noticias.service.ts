import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiURL = environment.apiNoticiasUrl;
const apiKey = environment.apiKey;
const headers = new HttpHeaders({
  'X-Api-Key': apiKey
});
@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  pagina = 0;
  constructor(private http: HttpClient) { }

  ejecutarQuery<T>(query: string) {
    query = apiURL + query;
    return this.http.get<T>(query, { headers });
  }

  obtenerTitularesDeNoticias() {
    console.log(this.pagina);
    this.pagina++;
    return this.ejecutarQuery<TopHeadlines>(`/top-headlines?country=us&page=${this.pagina}`);
  }
  obtenerTitularesPorCategoria(categoria: string) {
    return this.ejecutarQuery<TopHeadlines>(`top-headlines?country=us&category=${categoria}`);
  }
}
