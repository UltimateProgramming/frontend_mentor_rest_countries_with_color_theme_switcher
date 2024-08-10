import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CountryService } from '../core/services/country/country.service'
import { getCurrenciesFromObject } from '../util/currency-helper'
import { getLanguages } from '../util/language-helper'
import { switchMap } from 'rxjs'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  public country$ = this.activatedRoute.paramMap.pipe(
    switchMap((param) =>
      this.countryService.getCountryByCCA3(param.get('code')!)
    )
  )

  constructor(
    public router: Router,
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute
  ) {}

  public getCurrencies(currencies: object): string {
    return getCurrenciesFromObject(currencies)
  }

  public getLanguages(languages: object): string {
    return getLanguages(languages)
  }

  public clickOnBorderCountry(borderCountryCode: string) {
    this.router.navigate([`details/${borderCountryCode}`])
  }
}
