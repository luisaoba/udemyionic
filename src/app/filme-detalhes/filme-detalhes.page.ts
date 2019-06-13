import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoovieService } from '../moovie.service';
import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';


@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.page.html',
  styleUrls: ['./filme-detalhes.page.scss'],
})
export class FilmeDetalhesPage implements OnInit {

  public filme = null;
  public myId = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private moovie: MoovieService
  ) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('myId');
    console.log("The id is: " + this.myId);

    this.moovie.getMoovieDetails(this.myId).subscribe(
      data => {
        //console.log('Esta aqui é a data = ' + data);
        this.filme = (data as any);
      },
      error => {
        console.log(error);
       }
    );
  }

}
