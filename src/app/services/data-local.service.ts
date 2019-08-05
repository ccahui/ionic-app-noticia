import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];
  constructor(private storage: Storage, public toastController: ToastController) {
    this.cargarFavoritosDelStorage();
  }
  añadirAFavoritos(noticia: Article) {

    const noticiaRepetida = this.noticias.find(noticiaFavorita => noticiaFavorita.title === noticia.title);

    if (!noticiaRepetida) {
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

  private async cargarFavoritosDelStorage() {
    const noticiasFavoritos = await this.storage.get('favoritos');
    if (noticiasFavoritos) {
      this.noticias = noticiasFavoritos;
      console.log('Noticias Favoritos', this.noticias.length);
    }
  }
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      position: 'top',
      message: mensaje,
      duration: 1500
    });
    toast.present();
  }
  isFavorite(noticia: Article) {
    return this.noticias.some(noticiaA => noticiaA.title === noticia.title);
  }
}
