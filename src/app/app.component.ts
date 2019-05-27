import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
 
import { ConfigProvider } from './config/config';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ 
    ConfigProvider 
  ]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private configProvider: ConfigProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      let config = this.configProvider.getConfigData();
      console.log('Config é :' + config);
      if (config == null) {
        this.configProvider.setConfigData(false);
        // Nao mostra, pois é muito rapido!
        // tem que esperar aluns ms para ver a resposta! 
        // console.log('É nulo' + config);
      } 

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
