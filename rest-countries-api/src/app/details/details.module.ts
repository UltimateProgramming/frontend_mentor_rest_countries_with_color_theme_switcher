import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DetailsComponent } from './details.component'
import { BackButtonComponent } from './components/back-button/back-button.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [DetailsComponent, BackButtonComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class DetailsModule {}
