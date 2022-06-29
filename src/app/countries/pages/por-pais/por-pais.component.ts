import { ParseFlags } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Country } from '../../interfaces/Country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent implements OnInit {

  errorExists: boolean = false;
  suggestionsExists:boolean = false;
  countries: Country[] = [];
  term:string = '';
  countriesSuggest: Country[] = [];

  search(term:string) {
    this.errorExists = false;
    this.suggestionsExists = false;
    this.term = term;
    this.countryService.searchCountry(term).subscribe(

        response => this.countries = response,
        (err) => {
          this.errorExists = true;
          this.countries = [];
        }
      
    )
  }


  suggestions(term:string) {
    this.suggestionsExists = true;
    this.errorExists = false;
    this.term = term;
    this.countryService.searchCountry(term)
    .subscribe( countries => this.countriesSuggest = countries.splice(0,5),
      (err) => this.countriesSuggest = []
    )
  }

 

  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
   
  }

}
