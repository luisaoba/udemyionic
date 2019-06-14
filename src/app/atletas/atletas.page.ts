import { Component, OnInit } from '@angular/core';
import { CartolaService } from '../cartola.service';

@Component({
  selector: 'app-atletas',
  templateUrl: './atletas.page.html',
  styleUrls: ['./atletas.page.scss'],
})
export class AtletasPage implements OnInit {

  constructor(
    private cartola: CartolaService
  ) { 

    }

  ngOnInit() {
    this.carregarAtletas();
  }

  carregarAtletas() {
    this.cartola.listarAtletas().subscribe(
      data=>{
          console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
