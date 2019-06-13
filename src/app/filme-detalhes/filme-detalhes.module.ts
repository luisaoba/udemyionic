import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilmeDetalhesPage } from './filme-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeDetalhesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FilmeDetalhesPage]
})
export class FilmeDetalhesPageModule {}
