import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;
  @Input() isTabFavoritos: boolean;
  constructor(private iab: InAppBrowser, private actionSheetController: ActionSheetController,
              private socialSharing: SocialSharing,
              private dataLocal: DataLocalService) { }

  ngOnInit() { }

  abrirNoticia() {
    this.iab.create(this.noticia.url);
  }

  async presentActionSheet() {

    if (this.isTabFavoritos) {
      const actionSheet = await this.actionSheetQuitarDeFavoritos();
      await actionSheet.present();
    } else {
      const actionSheet = await this.actionSheetAgregarAFavoritos();
      await actionSheet.present();
    }
  }

  async actionSheetAgregarAFavoritos() {
    const actionSheet = await this.actionSheetController.create({
      // mode: 'md',
      buttons: [
        {
          text: 'Favorito',
          icon: 'star',
          handler: () => {
            this.dataLocal.añadirAFavoritos(this.noticia);
          }
        }, {
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            this.socialSharing.share(this.noticia.title, this.noticia.source.name, this.noticia.url);
          },
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    return actionSheet;
  }
  async actionSheetQuitarDeFavoritos() {
    const actionSheet = await this.actionSheetController.create({
      // mode: 'md',
      buttons: [
        {
          text: 'Quitar de Favoritos',
          icon: 'star',
          handler: () => {
            this.dataLocal.quitarDeFavoritos(this.noticia);
          }
        }, {
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            this.socialSharing.share(this.noticia.title, this.noticia.source.name, this.noticia.url);
          },
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    return actionSheet;
  }

}

