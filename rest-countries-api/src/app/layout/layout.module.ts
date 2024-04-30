import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { LayoutComponent } from './layout.component'
import { TopNavComponent } from './components/top-nav/top-nav.component'
import { RouterModule } from '@angular/router'
import { routes } from './layout.routes'

@NgModule({
  declarations: [LayoutComponent, TopNavComponent],
  exports: [LayoutComponent],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
})
export class LayoutModule {}
