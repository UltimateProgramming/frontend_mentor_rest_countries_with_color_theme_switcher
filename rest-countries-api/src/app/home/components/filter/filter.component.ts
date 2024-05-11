import { Component, Input } from '@angular/core'
import { CountryService } from '../../../core/services/country/country.service'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  public regions$ = this.countryService.allRegions$

  @Input() public regionFormControl = new FormControl('init_value')

  constructor(private countryService: CountryService) {}
}
