import { Component, Input } from '@angular/core'
import { CountryCard } from '../../../core/models/country-card'
import { Router } from '@angular/router'

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent {
  @Input({ required: true }) public country: CountryCard

  constructor(private router: Router) {}

  public onCountryCardClick(countryCode: string) {
    this.router.navigate(['/details', countryCode])
  }
}
