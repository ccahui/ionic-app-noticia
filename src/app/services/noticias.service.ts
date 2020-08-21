/**
 * @author Cristian Cahui
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { DataLocalService } from './data-local.service';
import { RootApiResult, Article } from '../interfaces/interfaces';
import { throwError } from 'rxjs';

const apiURL = environment.apiNoticiasUrl;
const apiKey = environment.apiKey;

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
    query = query.includes('?') ? query + `&token=${apiKey}&image=required` : query + `?token=${apiKey}&image=required`;
    return this.http.get<T>(query).pipe(catchError((error) => {
      let errorMessage = 'Error Service';
      if (error.status === 429) {
        errorMessage = 'Api News: you have reached your max request per day';
      }
      return throwError(errorMessage);
    }));
  }

  obtenerTitulares() {
    this.paginacionTopHeadline++;
    // La operacion dentro del operador Map es importante
    // de otro modo el atributo de Noticia isFavorite no estaria definido
    return this.ejecutarQuery<RootApiResult>(`search?q=top-news`)
      .pipe(
        map((data: RootApiResult) => {
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
    return this.ejecutarQuery<RootApiResult>(`search?q=${categoria}&page=${this.paginacionCategoria}`)
      .pipe(
        map((data: RootApiResult) => {
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
