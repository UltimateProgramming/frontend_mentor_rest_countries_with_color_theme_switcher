import { Injectable } from '@angular/core'
import { RestService } from '../rest/rest.service'
import { ApiRoutes } from '../../../util/api-routes'
import { Region } from '../../models/region'
import { distinct, map, shareReplay } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  allRegions$ = this.restService
    .get<Region[]>(ApiRoutes.all, {
      params: { fields: 'region' },
    })
    .pipe(
      map((regions) => this.makeDistinctRegions(regions)),
      shareReplay(1)
    )

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
