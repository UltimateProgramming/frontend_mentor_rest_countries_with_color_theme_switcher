import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { LayoutComponent } from './layout.component'
import { TopNavComponent } from './components/top-nav/top-nav.component'

@NgModule({
  declarations: [LayoutComponent, TopNavComponent],
  exports: [LayoutComponent],
  imports: [CommonModule, BrowserModule],
})
export class LayoutModule {}
