/**
 * @author Cristian Cahui
 */
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(private storage: Storage, public toastController: ToastController) {
    this.cargarFavoritosDelStorage();
  }

  private async cargarFavoritosDelStorage() {
    const noticiasFavoritos = await this.storage.get('favoritos');
    if (noticiasFavoritos) {
      this.noticias = noticiasFavoritos;
      console.log('Noticias Favoritos', this.noticias.length);
    }
  }

  añadirAFavoritos(noticia: Article) {
    if (!this.isFavorite(noticia)) {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos', this.noticias);
    }
    this.presentToast('Se ha añadido a Favoritos');
  }

  quitarDeFavoritos(noticia: Article) {
    this.noticias = this.noticias.filter(noti => noti.title !== noticia.title);
    this.storage.set('favoritos', this.noticias);
    this.presentToast('Se ha quitado de Favoritos');
  }

  isFavorite(noticia: Article) {
    return this.noticias.some(noticiaA => noticiaA.title === noticia.title);
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      position: 'top',
      message: mensaje,
      duration: 1500
    });
    toast.present();
  }
}
