import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { SearchComponent } from './components/search/search.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FilterComponent } from './components/filter/filter.component'
import { CountryCardComponent } from './components/country-card/country-card.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    FilterComponent,
    CountryCardComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [HomeComponent, SearchComponent],
})
export class HomeModule {}
