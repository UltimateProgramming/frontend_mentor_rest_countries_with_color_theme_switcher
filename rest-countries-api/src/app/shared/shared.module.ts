import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { KeyValueComponent } from './components/key-value/key-value.component'

@NgModule({
  declarations: [KeyValueComponent],
  imports: [CommonModule, BrowserModule],
  exports: [KeyValueComponent],
})
export class SharedModule {}
