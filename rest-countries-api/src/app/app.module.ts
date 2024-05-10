import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { LayoutModule } from './layout/layout.module'
import { CoreModule } from './core/core.module'

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [CommonModule, BrowserModule, LayoutModule, CoreModule],
})
export class AppModule {}
