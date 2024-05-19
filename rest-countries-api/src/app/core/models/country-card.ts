import { Flag } from './flag'
import { Name } from './name'

export interface CountryCard {
  name: Name
  flags: Flag
  population: number
  region: string
  capital: string
}
