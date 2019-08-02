import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];
  constructor(private noticiasService: NoticiasService) {

  }
  ngOnInit() {
    this.noticiasService.obtenerTitularesDeNoticias()
      .subscribe((TopHeadlines) => {
        this.noticias.push(...TopHeadlines.articles);
      });
  }

}
