import { Component } from '@angular/core'
import { CountryService } from '../core/services/country/country.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  allCountries$ = this.countryService.allCountries$

  constructor(private countryService: CountryService) {}
}
