import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';
import { finalize, delay } from 'rxjs/operators';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[];
  isSpinner: boolean;

  constructor(private noticiasService: NoticiasService) {

  }
  ngOnInit() {
    this.noticias = [];
    this.isSpinner = true;
    this.obtenerTitularesDeNoticias();
  }

  obtenerTitularesDeNoticias() {

    this.isSpinner = true;
    this.noticiasService.obtenerTitularesDeNoticias()
      .pipe(
        finalize(() => {
          this.isSpinner = false;
        }))
      .subscribe((TopHeadlines) => {
        this.noticias.push(...TopHeadlines.articles);
      });

  }

  loadDataInfiniteScroll(event) {
    console.log('Infinite Scroll');
    this.noticiasService.obtenerTitularesDeNoticias()
      .pipe(
        finalize(() => {
          event.target.complete();
        }))
      .subscribe((TopHeadlines) => {
        if (TopHeadlines.articles.length === 0) {
          event.target.disabled = true;
        }
        this.noticias.push(...TopHeadlines.articles);

      });
  }

}
