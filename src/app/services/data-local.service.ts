import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];
  constructor(private storage: Storage) {
    console.log('Inicio');
    this.cargarFavoritosDelStorage();
  }
  añadirAFavoritos(noticia: Article) {

    const noticiaRepetida = this.noticias.find(noticiaFavorita => noticiaFavorita.title === noticia.title);

    if (!noticiaRepetida) {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos', this.noticias);
      console.log('Guardado');
    }
  }

  private async cargarFavoritosDelStorage() {
    const noticiasFavoritos = await this.storage.get('favoritos');
    if (noticiasFavoritos) {
      this.noticias = noticiasFavoritos;
      console.log('Noticias Favoritos', this.noticias.length);
    }
  }
}
