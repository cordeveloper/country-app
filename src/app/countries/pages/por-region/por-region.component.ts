import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/Country';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA','NAFTA', 'SAARC'];
  regionActiva: string = '';
  countries:Country[] = [];

  constructor(private countryService:CountryService) { }

  activarRegion(region:string) {
    if(region === this.regionActiva) return;
    this.regionActiva = region;
    this.countries = [];
    this.countryService.searchRegion(this.regionActiva).subscribe(
      countries => this.countries = countries
    )
  }

}
