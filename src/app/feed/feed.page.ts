import { Component, OnInit } from '@angular/core';
import { MoovieService } from '../moovie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss']
})
export class FeedPage implements OnInit {
  public objeto_feed = {
    titulo: "Charles Franca Json",
    data: "November 5, 1955",
    descricao: "Estou criando um app incrível...",
    qntd_likes: 12,
    qntd_comments: 4, 
    time_comment: "11h ago teste"
  }

  public nome_usuario:string = "Charles Franca do Código";

  constructor(private moovie: MoovieService) { }

  ngOnInit() {
    //this.SomaDoisNumeros(10, 99);
    this.moovie.getLatestMoovies().subscribe((response) => {
      console.log(response);
    });
  }

  public SomaDoisNumeros(num1:number, num2:number): void {
    //alert('Minha função funcionou!');
    //alert(5+10);
    alert(num1 + num2);
  }
}
