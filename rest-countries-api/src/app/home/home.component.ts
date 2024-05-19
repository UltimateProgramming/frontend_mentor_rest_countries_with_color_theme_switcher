import { Component } from '@angular/core'
import { CountryService } from '../core/services/country/country.service'
import { FormControl } from '@angular/forms'
import {
  Observable,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  startWith,
  switchMap,
} from 'rxjs'
import { CountryCard } from '../core/models/country-card'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private initValue = 'init_value'

  public regionFilter = new FormControl(this.initValue)
  public search = new FormControl('')

  public filteredCountries$: Observable<CountryCard[]> = combineLatest([
    this.search.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      startWith('')
    ),
    this.regionFilter.valueChanges.pipe(startWith(this.initValue)),
  ]).pipe(
    switchMap(([search, filter]) => {
      if (search) {
        return this.countryService.getCountriesByName(search)
      }
      if (filter === this.initValue) {
        return this.countryService.allCountries$
      }

      return this.countryService.getCountriesFilteredByRegion(filter as string)
    })
  )

  constructor(private countryService: CountryService) {}
}
