import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment, IonInfiniteScroll } from '@ionic/angular';
import { Article } from '../../interfaces/interfaces';
import { NoticiasService } from '../../services/noticias.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  // categoriaActual: string;
  noticias: Article[];
  isSpinner: boolean;

  @ViewChild('segmento', { static: true }) elementSegment: IonSegment;
  @ViewChild(IonInfiniteScroll, { static: true }) elementInfiniteScroll: IonInfiniteScroll;

  constructor(private noticiaService: NoticiasService) { }

  ngOnInit() {
    this.isSpinner = true;
    this.noticias = [];
    this.elementSegment.value = this.categorias[0];
    this.elementInfiniteScroll.disabled = true;
    this.obtenerNoticiasPorCategoria(this.elementSegment.value);
  }

  /*
  * HABILITO INFINITE SCROLL, puede encontrarse DESABILITADO
  */
  segmentChanged() {
    this.noticias = [];
    this.elementInfiniteScroll.disabled = true;
    this.obtenerNoticiasPorCategoria(this.elementSegment.value);
  }

  obtenerNoticiasPorCategoria(categoria: string) {

    this.isSpinner = true;
    this.noticiaService.obtenerTitularesPorCategoria(categoria)
      .pipe(
        finalize(() => {
          this.isSpinner = false;
          this.elementInfiniteScroll.disabled = false;
        }))
      .subscribe(TopHeadlinesCategoria => {
        console.log('Resultados', TopHeadlinesCategoria.totalResults);
        this.noticias.push(...TopHeadlinesCategoria.articles);

      });
  }

  scrollHorizontalCenter(event) {
    event.target.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });

  }

  loadDataInfiniteScroll() {
    this.noticiaService.obtenerTitularesPorCategoria(this.elementSegment.value)
      .pipe(
        finalize(() => {
          this.elementInfiniteScroll.complete();
        }))
      .subscribe((TopHeadlinesCategoria) => {

        if (TopHeadlinesCategoria.articles.length === 0) {
          this.elementInfiniteScroll.disabled = true; // DESABILITO EL INFINITE SCROLL
        }
        this.noticias.push(...TopHeadlinesCategoria.articles);

      });
  }
}
