import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;
  constructor(private iab: InAppBrowser, private actionSheetController: ActionSheetController, private socialSharing: SocialSharing) { }

  ngOnInit() { }

  abrirNoticia() {
    this.iab.create(this.noticia.url);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      // mode: 'md',
      buttons: [
        {
          text: 'Favorito',
          icon: 'star',
          handler: () => {
            console.log('Favorite clicked');
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
    await actionSheet.present();
  }
  
}

