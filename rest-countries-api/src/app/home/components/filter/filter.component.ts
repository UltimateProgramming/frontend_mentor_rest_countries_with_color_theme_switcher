import { Component } from '@angular/core'
import { CountryService } from '../../../core/services/country/country.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  public regions$ = this.countryService.allRegions$

  constructor(private countryService: CountryService) {}
}
