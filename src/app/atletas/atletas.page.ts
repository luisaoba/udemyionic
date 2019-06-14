import { Component, OnInit } from '@angular/core';
import { CartolaService } from '../cartola.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-atletas',
  templateUrl: './atletas.page.html',
  styleUrls: ['./atletas.page.scss'],
})
export class AtletasPage implements OnInit {

  foto = "";

  constructor(
    private cartola: CartolaService,
    private camera: Camera    
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

  tirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    }

  
    // PROMISE: Executa quando estiver pronto.
    // Depois de pegar a imagem, aí faz alguma coisa
    this.camera.getPicture(options)
    .then((imageData) => {
      let base64image = 'data:image/jpeg;base64,' + imageData;
      this.foto = base64image;

    }, (error) => {
      console.error(error);
    })
    .catch((error) => {
      console.error(error);
    })

  }
}
