import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {
  termino:string = ''
  constructor(private paisService: PaisService) { }

  buscar(){
    this.paisService.buscarPais(this.termino)
      .subscribe(resp =>{
        console.log(resp);
      })
  }

}
