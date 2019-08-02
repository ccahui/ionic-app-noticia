import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiasComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    RouterModule

  ],
  exports: [
    NoticiaComponent,
    NoticiasComponent
  ]
})
export class ComponentsModule { }
