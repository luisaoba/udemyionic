import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public nome_usuario:string = "Charles Franca do Código";

  constructor() { }

  ngOnInit() {
    //this.SomaDoisNumeros(10, 99);
  }

  public SomaDoisNumeros(num1:number, num2:number): void {
    //alert('Minha função funcionou!');
    //alert(5+10);
    alert(num1 + num2);
  }
}
