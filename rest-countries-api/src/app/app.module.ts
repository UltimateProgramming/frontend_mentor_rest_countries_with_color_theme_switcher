import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { CommonModule } from '@angular/common'
import { RouterOutlet, provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { BrowserModule } from '@angular/platform-browser'
import { LayoutModule } from './layout/layout.module'

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [provideRouter(routes)],
  imports: [CommonModule, RouterOutlet, BrowserModule, LayoutModule],
})
export class AppModule {}
