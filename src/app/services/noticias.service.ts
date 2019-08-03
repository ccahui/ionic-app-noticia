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

  // Manejo de Paginacion para TopHeadlines(Tab1Component) y CategoriaTopHeadline(Tab1Component)
  paginaTopHeadlines = 0;
  categoriaActual = '';
  paginaCategoria = 0;
  constructor(private http: HttpClient) { }

  ejecutarQuery<T>(query: string) {
    query = apiURL + query;
    return this.http.get<T>(query, { headers });
  }

  obtenerTitularesDeNoticias() {

    this.paginaTopHeadlines++;
    console.log('Titulares:', this.paginaTopHeadlines);
    return this.ejecutarQuery<TopHeadlines>(`/top-headlines?country=us&page=${this.paginaTopHeadlines}`);
  }

  obtenerTitularesPorCategoria(categoria: string) {

    if (this.categoriaActual !== categoria) {
      this.categoriaActual = categoria;
      this.paginaCategoria = 1;
    } else {
      this.paginaCategoria++;
    }
    console.log('Encabezados:', this.categoriaActual, this.paginaCategoria);
    return this.ejecutarQuery<TopHeadlines>(`top-headlines?country=us&category=${categoria}&page=${this.paginaCategoria}`);
  }
}
