import { Injectable } from '@angular/core'
import { RestService } from '../rest/rest.service'
import { ApiRoutes } from '../../../util/api-routes'
import { Region } from '../../models/region'
import { map, share } from 'rxjs'
import { CountryCard } from '../../models/country-card'

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  allRegions$ = this.restService
    .get<Region[]>(ApiRoutes.all, {
      params: { fields: 'region' },
    })
    .pipe(
      map((regions) => this.makeDistinctRegions(regions)),
      share()
    )

  allCountries$ = this.restService
    .get<CountryCard[]>(ApiRoutes.all, {
      params: { fields: 'nativeName,population,region,capital,flags' },
    })
    .pipe(share())

  constructor(private restService: RestService) {}

  private makeDistinctRegions(regions: Region[]): Region[] {
    const regionNames = regions.map((region) => region.region)
    const distinctNames = Array.from(new Set(regionNames))
    let distinctRegions: Region[] = []
    distinctNames.forEach((name) => {
      distinctRegions.push({ region: name })
    })
    return distinctRegions
  }
}
