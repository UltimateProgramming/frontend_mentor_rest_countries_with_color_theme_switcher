import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DetailsComponent } from './details.component'
import { ButtonComponent } from './components/button/button.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [DetailsComponent, ButtonComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class DetailsModule {}
