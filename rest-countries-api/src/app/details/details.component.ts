import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CountryService } from '../core/services/country/country.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  public country$ = this.countryService.getCountryByCCA3(
    this.activedRoute.snapshot.paramMap.get('code')!
  )

  constructor(
    private countryService: CountryService,
    private activedRoute: ActivatedRoute
  ) {}
}
