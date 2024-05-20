import { Routes } from '@angular/router'
import { HomeComponent } from '../home/home.component'
import { DetailsComponent } from '../details/details.component'

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'details/:code',
    component: DetailsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
]
