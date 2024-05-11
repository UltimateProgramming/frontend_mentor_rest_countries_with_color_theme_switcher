import { Component } from '@angular/core'
import { CountryService } from '../core/services/country/country.service'
import { FormControl } from '@angular/forms'
import { Observable, startWith, switchMap } from 'rxjs'
import { CountryCard } from '../core/models/country-card'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private initValue = 'init_value'

  public regionFilter = new FormControl(this.initValue)
  public filteredCountries$: Observable<CountryCard[]> =
    this.regionFilter.valueChanges.pipe(
      startWith(this.initValue),
      switchMap((value) => {
        if (value === this.initValue) {
          return this.countryService.allCountries$
        }

        return this.countryService.getCountriesFilteredByRegion(value as string)
      })
    )

  constructor(private countryService: CountryService) {}
}
