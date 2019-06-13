import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// Teve que incluir esse modulo por causa da API do MovieDB
//import { HttpModule } from '@angular/http';
//import { HTTP } from '@ionic-native/http/ngx';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedPageModule } from './feed/feed.module';
import { IntroPageModule } from './intro/intro.module';
import { ConfiguracoesPageModule } from './configuracoes/configuracoes.module';
import { SobrePageModule } from './sobre/sobre.module';
import { PerfilPageModule } from './perfil/perfil.module';
import { FilmeDetalhesPageModule } from './filme-detalhes/filme-detalhes.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
      IonicModule.forRoot(), 
      AppRoutingModule,
      FeedPageModule,
      IntroPageModule,
      HttpClientModule,
      ConfiguracoesPageModule,
      SobrePageModule,
      PerfilPageModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
