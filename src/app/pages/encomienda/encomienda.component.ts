import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-encomienda',
  templateUrl: './encomienda.component.html',
  styleUrls: ['./encomienda.component.css']
})
export class EncomiendaComponent implements OnInit {

  constructor( public infoService: InfoPaginaService) { }

  ngOnInit() {
  }

}
