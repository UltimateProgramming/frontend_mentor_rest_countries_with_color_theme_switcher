import { Injectable } from '@angular/core'
import { RestService } from '../rest/rest.service'
import { ApiRoutes } from '../../../util/api-routes'
import { Region } from '../../models/region'
import { Observable, map, share } from 'rxjs'
import { CountryCard } from '../../models/country-card'

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  public allRegions$ = this.restService
    .get<Region[]>(ApiRoutes.all, {
      params: { fields: 'region' },
    })
    .pipe(
      map((regions) => this.makeDistinctRegions(regions)),
      share()
    )

  public allCountries$ = this.restService
    .get<CountryCard[]>(ApiRoutes.all, {
      params: { fields: 'nativeName,population,region,capital,flags' },
    })
    .pipe(share())

  constructor(private restService: RestService) {}

  public getCountriesFilteredByRegion(
    region: string
  ): Observable<CountryCard[]> {
    return this.restService.get<CountryCard[]>(
      ApiRoutes.region.replace('{region}', region),
      { params: { fields: 'nativeName,population,capital,flags' } }
    )
  }

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
