import { Component, Input } from '@angular/core'
import { CountryCard } from '../../../core/models/country-card'

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent {
  @Input({ required: true }) public country: CountryCard

  constructor() {}
}
