import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/Country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {

  country!:Country;

  constructor(private activatedRoute:ActivatedRoute, private countryService:CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.countryService.getCountryByCode(id) ),
      tap( console.log )
    )
    .subscribe(
      country => this.country = country
    )
  }

}
