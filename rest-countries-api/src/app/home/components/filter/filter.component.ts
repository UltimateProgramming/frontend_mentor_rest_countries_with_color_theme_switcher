import { Component } from '@angular/core'
import { RegionService } from '../../../core/services/region/region.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  public regions$ = this.regionService.allRegions$

  constructor(private regionService: RegionService) {}
}
