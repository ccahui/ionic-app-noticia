import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  constructor() { }

  ngOnInit() {}

}
