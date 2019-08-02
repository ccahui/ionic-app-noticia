import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article, TopHeadlines } from '../../interfaces/interfaces';
import { NoticiasService } from '../../services/noticias.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  categoriaActual: string;
  noticias: Article[];
  isSpinner: boolean;

  @ViewChild('segmento', { static: true }) segment: IonSegment;

  constructor(private noticiaService: NoticiasService) { }

  ngOnInit() {
    this.isSpinner = true;
    this.noticias = [];
    this.categoriaActual = this.categorias[0];
    this.segment.value = this.categoriaActual;
    this.obtenerNoticiasPorCategoria(this.categoriaActual);
  }
  segmentChanged(event) {

    this.categoriaActual = event.detail.value;
    this.noticias = [];
    this.obtenerNoticiasPorCategoria(this.categoriaActual);
  }
  async obtenerNoticiasPorCategoria(categoria: string) {

    this.isSpinner = true;
    this.noticiaService.obtenerTitularesPorCategoria(categoria)
      .pipe(
        finalize(() => {
          this.isSpinner = false;
        }))
      .subscribe(TopHeadlinesCategoria => {
        this.noticias.push(...TopHeadlinesCategoria.articles);

      });
  }
  scrollHorizontalCenter(event) {
    // Segmento Scroll Horizontal
    //   if (this.lista) {
    //    this.lista.el.scrollIntoView();
    // }
    event.target.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });

  }
}
