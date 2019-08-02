import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article, TopHeadlines } from '../../interfaces/interfaces';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  categoriaActual: string;
  noticias: Article[] = [];
  @ViewChild('segmento') segment: IonSegment;

  constructor(private noticiaService: NoticiasService) { }

  ngOnInit() {
    this.categoriaActual = this.categorias[0];
    this.segment.value = this.categoriaActual;
    this.obtenerNoticiasPorCategoria(this.categoriaActual);
  }
  segmentChanged(event) {

    this.categoriaActual = event.detail.value;
    this.noticias = [];
    this.obtenerNoticiasPorCategoria(this.categoriaActual);
  }
  obtenerNoticiasPorCategoria(categoria: string) {
    this.noticiaService.obtenerTitularesPorCategoria(categoria)
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
