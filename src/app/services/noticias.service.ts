/**
 * @author Cristian Cahui
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { DataLocalService } from './data-local.service';
import { TopHeadlines, Article } from '../interfaces/interfaces';

const apiURL = environment.apiNoticiasUrl;
const apiKey = environment.apiKey;
const headers = new HttpHeaders({
  'X-Api-Key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  paginacionTopHeadline = 0;
  categoriaActual = '';
  paginacionCategoria = 0;

  constructor(private http: HttpClient, private dataService: DataLocalService) { }

  ejecutarQuery<T>(query: string) {
    query = apiURL + query;
    return this.http.get<T>(query, { headers });
  }

  obtenerTitulares() {
    this.paginacionTopHeadline++;
    // La operacion dentro del operador Map es importante
    // de otro modo el atributo de Noticia isFavorite no estaria definido
    return this.ejecutarQuery<TopHeadlines>(`/top-headlines?country=us&page=${this.paginacionTopHeadline}`)
      .pipe(
        map((data: TopHeadlines) => {
          this.agregarAtributoIsFavoritoANoticias(data.articles);
          return data;
        }));
  }

  obtenerTitularesPorCategoria(categoria: string) {
    if (this.categoriaActual !== categoria) {
      this.cambiarCategoriaYReiniciarPaginacion(categoria);
    }
    this.paginacionCategoria++;
    // La operacion dentro del operador Map es importante
    // de otro modo el atributo de Noticia isFavorite de no estaria definido
    return this.ejecutarQuery<TopHeadlines>(`top-headlines?country=us&category=${categoria}&page=${this.paginacionCategoria}`)
      .pipe(
        map((data: TopHeadlines) => {
          this.agregarAtributoIsFavoritoANoticias(data.articles);
          return data;
        })
      );
  }

  cambiarCategoriaYReiniciarPaginacion(categoria: string) {
    this.categoriaActual = categoria;
    this.paginacionCategoria = 0;
  }

  agregarAtributoIsFavoritoANoticias(articles: Article[]) {
    articles.forEach(article => {
      article.isFavorite = this.dataService.isFavorite(article);
    });
  }

  reiniciarPaginacionTitulareNoticias() {
    this.paginacionTopHeadline = 0;
  }

}
