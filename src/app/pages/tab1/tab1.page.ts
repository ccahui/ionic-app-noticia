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
    this.noticiasService.obtenerTitularesDeNoticias()
      .pipe(
        finalize(() => {
          this.isSpinner = false;
          this.elementInfiniteScroll.disabled = false;
        }))
      .subscribe((TopHeadlines) => {
        this.noticias.push(...TopHeadlines.articles);
      });
  }

  loadDataInfiniteScroll() {

    this.noticiasService.obtenerTitularesDeNoticias()
      .pipe(
        finalize(() => {
          this.elementInfiniteScroll.complete(); // Oculta el Spinner
        }))
      .subscribe((TopHeadlines) => {
        if (TopHeadlines.articles.length === 0) {
          this.elementInfiniteScroll.disabled = true; // Desabilita InfiniteScroll para su futuro uso
        }
        this.noticias.push(...TopHeadlines.articles);

      });
  }

}
