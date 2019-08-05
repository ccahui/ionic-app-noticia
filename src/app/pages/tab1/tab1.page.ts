import { Component, OnInit, ViewChild } from '@angular/core';
import { finalize} from 'rxjs/operators';
import { IonInfiniteScroll } from '@ionic/angular';

import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[];
  isSpinner: boolean;

  @ViewChild(IonInfiniteScroll, { static: true }) elementInfiniteScroll: IonInfiniteScroll;
  constructor(private noticiasService: NoticiasService) {

  }
  ngOnInit() {
    this.noticias = [];
    this.isSpinner = true;
    this.obtenerTitularesDeNoticiasPrimeraVez();
    this.elementInfiniteScroll.disabled = true;
  }

  obtenerTitularesDeNoticiasPrimeraVez() {
    this.isSpinner = true;
    this.noticiasService.obtenerTitulares()
      .pipe(
        finalize(() => {
          this.isSpinner = false;
          this.elementInfiniteScroll.disabled = false;
        }))
      .subscribe((TopHeadlines) => {
        this.noticias.push(...TopHeadlines.articles);
      });
  }

  pullToRefresh(event) {
    this.noticiasService.reiniciarPaginacionTitulareNoticias();
    this.noticiasService.obtenerTitulares()
      .pipe(
        finalize(() => {
          event.target.complete();
          this.elementInfiniteScroll.disabled = false;
        }))
      .subscribe((TopHeadlines) => {
        this.noticias = TopHeadlines.articles;
      });
  }

  loadDataInfiniteScroll() {
    this.noticiasService.obtenerTitulares()
      .pipe(
        finalize(() => {
          this.elementInfiniteScroll.complete();
        }))
      .subscribe((TopHeadlines) => {
        if (TopHeadlines.articles.length === 0) {
          this.elementInfiniteScroll.disabled = true;
        }
        this.appendNoticias(TopHeadlines.articles);
      });
  }

  appendNoticias(noticias: Article[]) {
    this.noticias.push(...noticias);
  }
}
