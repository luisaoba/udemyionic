import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CartolaService {

  basePath = "/mercado"; // Vai procurar este caminho no proxy.config.json
  // e na seção "serve" em angular.json

  constructor(
    private http: HttpClient,
    private _platform: Platform
    ) { 
      if (this._platform.is("cordova")) {
        this.basePath = "https://api.cartolafc.globo.com/atletas/mercado";
      }
    }

  listarAtletas(){
    return this.http.get(this.basePath + "");
  }

}
