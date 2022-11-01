import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService:PaisService) {}

  getClaseCSS(region: string) {
    return region === this.regionActiva
      ? 'btn btn-primary mr-2'
      : 'btn btn-outline-primary mr-2';
  }

  activarRegion(region: string) {
    if(region === this.regionActiva){return; }
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarPorRegion(region)
        .subscribe( paises => this.paises = paises)
  }
}
