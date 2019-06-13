import { Component, OnInit } from '@angular/core';
import { MoovieService } from '../moovie.service';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss']
})
export class FeedPage implements OnInit {
  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  public objeto_feed = {
    titulo: "Charles Franca Json",
    data: "November 5, 1955",
    descricao: "Estou criando um app incrível...",
    qntd_likes: 12,
    qntd_comments: 4, 
    time_comment: "11h ago teste"
  }

  public lista_filmes = new Array<any>();
  public page = 1;
  public infiniteScroll;

  public nome_usuario:string = "Charles Franca do Código";

  constructor(
    private moovie: MoovieService, 
    private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.carregarFilmes();
  }

  loadData(event) {
    console.log('estou em xxxloadData');

    this.page++;
    this.infiniteScroll = event.target;
    this.carregarFilmes(true); // vou carregar nova pagina

    setTimeout(() => {
      console.log('Done');
      this.infiniteScroll.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.page == 2) {
        this.infiniteScroll.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  carregarFilmes(newpage: boolean = false) {
    //this.SomaDoisNumeros(10, 99);
    this.abreCarregando();
    this.moovie.getLatestMoovies(this.page).subscribe(
      data=>{
        const response = (data as any);
        let pagina = JSON.parse(response.page);
        
        if (newpage) {
          // vou carregar a PROXIMA pagina
          this.lista_filmes = this.lista_filmes.concat(response.results as any);
          console.log(this.page);
          console.log(this.lista_filmes);

          this.infiniteScroll.complete();
        } else {
          // vou carregar a PRIMEIRA pagina
          this.lista_filmes = (response.results as any);
        }
        
        // Atualizou a listagem...fecha os ícones e pop-ups e menus de caregando e refreshing
        this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.target.complete();
          this.isRefreshing = false;
        }
      },
      error=>{
        console.log(error);
        this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.target.complete();
          this.isRefreshing = false;
        }
      }
    );
  }

  public SomaDoisNumeros(num1:number, num2:number): void {
    //alert('Minha função funcionou!');
    //alert(5+10);
    alert(num1 + num2);
  }

  async abreCarregando(){
      this.loader = await this.loadingCtrl.create({
        message: 'Carregando Filmes...',
        showBackdrop: true,
        spinner: 'lines-small'
      });
      
      this.loader.present();

      setTimeout(() => {
        this.loader.dismiss();
      }, 3000)
  }
  fechaCarregando(){
    if (this.loader) {
      this.loader.dismiss();
    }
  }

  doRefresh(event) {
    this.refresher = event;
    this.isRefreshing = true;
    console.log('Begin async operation');
    this.carregarFilmes();

    //setTimeout(() => {
    //  console.log('Async operation has ended');
    //  event.target.complete();
    //}, 2000);
  }
}
