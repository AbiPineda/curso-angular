import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-aplicacion-movil',
  templateUrl: './aplicacion-movil.component.html',
  styleUrls: ['./aplicacion-movil.component.css']
})
export class AplicacionMovilComponent implements OnInit {

  constructor( public infoService: InfoPaginaService) { }

  ngOnInit() {
  }

}
