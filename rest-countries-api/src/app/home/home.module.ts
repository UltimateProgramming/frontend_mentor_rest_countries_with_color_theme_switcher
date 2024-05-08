import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { SearchComponent } from './components/search/search.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component'

@NgModule({
  declarations: [HomeComponent, SearchComponent, FilterComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [HomeComponent, SearchComponent],
})
export class HomeModule {}
