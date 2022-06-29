import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Country } from '../../interfaces/Country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() placeholder:string = 'Buscar pais...';
  @Input() value:string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  term: string = '';
  debouncer: Subject<string> = new Subject();

  constructor(private countryService:CountryService) { }

  search() {
    this.onEnter.emit(this.term);
  }

  keypress() {
    this.debouncer.next(this.term);
  }

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(term => this.onDebounce.emit(term))
  }

}
