import { Injectable } from '@angular/core';
//import { HttpModule } from '@angular/http';
//import { HttpModule } from '@angular/http';
//import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoovieService {

  private baseAPIPath = "https://api.themoviedb.org/3";
  private baseAPIKey = "?api_key=1f5da4bdb22ad875235385527e73743f";

  constructor(private http: HttpClient) { }

  getLatestMoovies(page = 1){
    // latest é o último filme
    return this.http.get(this.baseAPIPath+"/movie/popular"+this.baseAPIKey+"&page="+page);
  }

  getMoovieDetails(filmeid){
    console.log(this.baseAPIPath+"/movie/"+filmeid+this.baseAPIKey);
    return this.http.get(this.baseAPIPath+"/movie/"+filmeid+this.baseAPIKey);
  }


}
