import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent implements OnInit {

  errorExists: boolean = false;
  countries: Country[] = [];
  term:string = '';

  search(term:string) {
    this.errorExists = false;
    this.term = term;
    this.countryService.searchCapital(term).subscribe(

        response => this.countries = response,
        (err) => {
          this.errorExists = true;
          this.countries = [];
        }
      
    )
  }

  suggestions(term:string) {
    this.errorExists = false;
  }

  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
  }

}
