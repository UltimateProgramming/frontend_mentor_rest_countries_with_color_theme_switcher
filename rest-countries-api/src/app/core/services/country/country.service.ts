import { Injectable } from '@angular/core'
import { RestService } from '../rest/rest.service'
import { ApiRoutes } from '../../../util/api-routes'
import { Region } from '../../models/region'
import {
  Observable,
  catchError,
  forkJoin,
  map,
  of,
  share,
  switchMap,
} from 'rxjs'
import { CountryCard } from '../../models/country-card'
import { Country } from '../../models/country'
import { NameResponse } from '../../models/name-response'
import { CountryExtension } from '../../models/country-extension'

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
      params: { fields: 'cca3,name,population,region,capital,flags' },
    })
    .pipe(
      catchError(() => {
        return of([])
      })
    )

  constructor(private restService: RestService) {}

  public getCountriesFilteredByRegion(
    region: string
  ): Observable<CountryCard[]> {
    return this.restService
      .get<
        CountryCard[]
      >(ApiRoutes.region.replace('{region}', region), { params: { fields: 'cca3,name,population,capital,flags' } })
      .pipe(
        catchError(() => {
          return of([])
        })
      )
  }

  public getCountriesByName(name: string): Observable<CountryCard[]> {
    return this.restService
      .get<CountryCard[]>(ApiRoutes.name.replace('{name}', name), {
        params: {
          fields: 'cca3,name,population,capital,flags',
        },
      })
      .pipe(
        catchError(() => {
          return of([])
        })
      )
  }

  public getCountryByCCA3(cca3: string): Observable<CountryExtension> {
    return this.restService
      .get<Country>(ApiRoutes.alpha.replace('{code}', cca3), {
        params: {
          fields:
            'name,population,region,subregion,capital,tld,currencies,borders,flags,languages',
        },
      })
      .pipe(
        switchMap((country) =>
          forkJoin(
            country.borders.map((border) =>
              this.restService.get<NameResponse>(
                ApiRoutes.alpha.replace('{code}', border),
                { params: { fields: 'name' } }
              )
            )
          ).pipe(
            map((names) => {
              let countryExtension: CountryExtension = {
                ...country,
                borderObjects: [],
              }
              let formattedNames = names.map((name) => name.name.common)
              for (let i = 0; i < formattedNames.length; i++) {
                countryExtension.borderObjects.push({
                  code: country.borders[i],
                  name: formattedNames[i],
                })
              }

              return countryExtension
            })
          )
        ),
        catchError(() => {
          return of({} as CountryExtension)
        })
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
